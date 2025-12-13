import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  tool,
  UIMessage,
} from 'ai';
import z from 'zod';
import { Pool } from 'pg';
import { google } from '@ai-sdk/google';
import { webSearch } from '@exalabs/ai-sdk';
//
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
/* 
But with that information, and finding in the web the current tends, if the user ask you can give information about the user ask, for example, recommendation good places start a business, take vacation, etc. */
// the ai needs to know my db schema to formulate the queries
const DB_SCHEMA = `
You are a SQL expert for a PostgreSQL database about Crime in Peru (Denuncias). 
The database uses a Star Schema. 

Tables:
- FACT_DENUNCIAS (fact_id, quantity, crime_key, location_key, date_key)
- DIM_LOCATION (location_key, district, province, department, ubigeo)
- DIM_CRIME (crime_key, crime_type)
- DIM_DATE (date_key, date_full, year, month_num, month_name)

Relationships (JOIN logic):
- FACT_DENUNCIAS.location_key -> DIM_LOCATION.location_key
- FACT_DENUNCIAS.crime_key    -> DIM_CRIME.crime_key
- FACT_DENUNCIAS.date_key     -> DIM_DATE.date_key 
`;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    // model: google('gemini-2.5-flash-lite'),
    // model: 'openai/gpt-4o',
    model: 'google/gemini-2.5-flash',
    messages: convertToModelMessages(messages),
    system: `${DB_SCHEMA}
    Rules:
    - Generate strictly valid PostgreSQL SQL.
    - Always JOIN 'fact_denuncias' with the dimension tables to get readable names.
    - If the user asks for "most dangerous", SUM the 'quantity' column and order DESC.
    - Example: To find top districts, join 'fact_denuncias' and 'dim_location', group by 'dim_location.district'.
    - current year is 2025.
    - When filtering by strings (like district, province, department), ALWAYS use the 'ILIKE' operator for case-insensitivity.
    - Example: USE "district ILIKE '%Miraflores%'" INSTEAD OF "district = 'Miraflores'".
    - There are multiple districts named 'Miraflores' in Peru. If the user does not specify a department (like 'Lima' or 'Arequipa'), return the SUM of all of them or group by Department to show the difference. 
    - When filtering text fields (districts, crimes, etc.), ALWAYS wrap BOTH the column and the value in the unaccent() function to ignore accents. Combine this with ILIKE. 
    `,

    tools: {
      webSearch: webSearch(),
      runQuery: tool({
        description:
          'Execute a SELECT SQL query to fetch data from the database',
        inputSchema: z.object({
          sql: z.string().describe('The SQL query to execute'),
          explanation: z
            .string()
            .describe('A brief explanation of what this query checks'),
        }),
        execute: async ({ sql }) => {
          try {
            console.log({ sql });
            const client = await pool.connect();
            const res = await client.query(sql);
            client.release();
            return JSON.stringify(res.rows);
          } catch (error) {
            return `Error executing SQL: ${{ error }}`;
          }
        },
      }),
    },
    stopWhen: stepCountIs(5),
  });

  return result.toUIMessageStreamResponse();
}
