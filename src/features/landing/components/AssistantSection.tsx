'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, UIMessage } from 'ai';
import { Bot, SendHorizonal, Sparkles, User } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { StatusChat } from './assistant-section/StatusChat';

export const AssistantSection = () => {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/assistant-ai',
    }),
    messages: [
      {
        id: 'welcome-message',
        role: 'assistant',
        parts: [
          {
            type: 'text',
            text: '¡Hola! Soy tu asistente de Visor Ciudadano. ¿En qué puedo ayudarte hoy con los datos de seguridad?',
          },
        ],
      },
    ] as UIMessage[],
  });
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      // This sets the scroll position to the bottom instantly or smoothly
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  // functions
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <section
      id="asistente-ia"
      className="w-full max-w-7xl px-9 mx-auto py-24 border-b border-slate-200 dark:border-slate-800"
    >
      {/* header */}
      <h2 className="text-center text-3xl font-extrabold text-blue-700 dark:text-blue-500 mb-3">
        Asistente IA de Consulta
      </h2>
      <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-4xl mx-auto">
        Pregunta sobre criminalidad, distritos peligrosos o tendencias
        históricas, etc. Nuestra IA consulta la base de datos por ti para
        ofrecer respuestas instantáneas.
      </p>
      {/* CHAT */}
      <div className="border border-slate-200 dark:border-slate-700 rounded-lg max-w-3xl mx-auto bg-white dark:bg-slate-900 shadow-xl">
        {/* chat header */}
        <div className="flex gap-3 items-center p-5 border-b border-slate-200 dark:border-slate-700">
          <div className="bg-blue-700 w-10 h-10 flex items-center justify-center rounded-3xl">
            <Sparkles className="  text-white" />
          </div>
          <div>
            <h3 className="font-bold">Asistente IA</h3>
            <StatusChat status={status} />
          </div>
        </div>
        {/* chat body */}
        <div
          className="p-5 border-b border-slate-200 dark:border-slate-700 h-130 overflow-y-scroll"
          ref={chatContainerRef}
        >
          {messages.map((message) => {
            if (message.role !== 'user') {
              return (
                // text bot
                <div key={message.id} className="flex gap-3 mb-5">
                  <div className="min-w-10 w-10 h-10 flex items-center justify-center rounded-3xl border border-slate-200 dark:border-slate-600">
                    <Bot className="text-blue-600 dark:text-blue-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {message.parts.map((part, index) =>
                      part.type === 'text' && part.text ? (
                        <p
                          key={index}
                          className="text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 p-3 rounded-xl rounded-tl-none"
                        >
                          {part.text}
                        </p>
                      ) : null
                    )}
                  </div>
                </div>
              );
            } else {
              //  text user
              return (
                <div key={message.id} className="flex gap-3 mb-5 justify-end">
                  {message.parts.map((part, index) => (
                    <p
                      key={index}
                      className="bg-blue-500 dark:bg-blue-700 text-white p-3 rounded-xl rounded-tr-none"
                    >
                      {part.type === 'text' ? part.text : null}
                    </p>
                  ))}
                  <div className="min-w-10 w-10 h-10 flex items-center justify-center rounded-3xl bg-slate-200 dark:bg-slate-500">
                    <User className="text-slate-500 dark:text-slate-200" />
                  </div>
                </div>
              );
            }
          })}
          {/* mark to scroll always to the end */}
          <div ref={messagesEndRef} />
        </div>
        {/* chat input */}
        <form className=" flex gap-2" onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Haz tu pregunta..."
            className="w-full p-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 p-2 text-white rounded-lg cursor-pointer transition-all duration-300 self-center mr-2"
          >
            <SendHorizonal />
          </button>
        </form>
      </div>
    </section>
  );
};
