import { ChartColumnBig, Check, Earth } from 'lucide-react';

export const MapSection = () => {
  return (
    <section
      id="mapa-del-delito"
      className="px-8 max-w-7xl w-full mx-auto pt-24 pb-24 border-b border-slate-200 dark:border-slate-800"
    >
      <header>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 dark:border dark:border-slate-500 mb-8">
          <Earth className="w-8 h-8 " />
        </div>
        <h2 className="text-2xl font-semibold mb-3">
          Mapa del Delito: Inteligencia Territorial y Zonas de Riesgo
        </h2>
      </header>
      <p className="text-lg text-slate-500 dark:text-slate-400 mb-7">
        Navegue a través de nuestro mapa de calor interactivo para visualizar la
        densidad criminal en todo el territorio peruano. Esta herramienta de
        georreferenciación permite identificar instantáneamente las zonas
        críticas (marcadas en rojo intenso) frente a las áreas de menor
        incidencia (amarillo), facilitando la identificación de patrones
        delictivos a nivel de departamento, distrito y provincia
      </p>
      <ul className="flex flex-col gap-3 mb-12">
        <li className="flex gap-2">
          <div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 dark:bg-emerald-900">
              <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-300 stroke-3" />
            </div>
          </div>
          <span className="text-slate-600 dark:text-slate-300 ">
            <span className="font-medium">Visualización Geoespacial: </span>
            Identifique focos de concentración delictiva mediante una escala de
            colores intuitiva (Rojo/Alto Riesgo vs. Amarillo/Bajo Riesgo).
          </span>
        </li>
        <li className="flex gap-2">
          <div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 dark:bg-emerald-900">
              <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-300 stroke-3" />
            </div>
          </div>
          <span className="text-slate-600 dark:text-slate-300 ">
            <span className="font-medium">Ranking de Peligrosidad: </span>
            Acceda al listado actualizado de los distritos con mayor índice de
            criminalidad y su desglose por tipo de delito.
          </span>
        </li>
        <li className="flex gap-2">
          <div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 dark:bg-emerald-900">
              <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-300 stroke-3" />
            </div>
          </div>
          <span className="text-slate-600 dark:text-slate-300">
            <span className="font-medium">Segmentación Territorial: </span>
            Utilice los filtros dinámicos para hacer zoom en datos específicos
            de su departamento, provincia o distrito.
          </span>
        </li>
      </ul>
      <div className="w-full bg-slate-100 rounded-lg flex items-center justify-center border-2 border-slate-200 text-slate-500 aspect-video overflow-hidden">
        <iframe
          title="test-visor-ciudadano"
          // width="1024"
          // height="1060"
          className="w-full h-full border-0"
          src="https://app.powerbi.com/view?r=eyJrIjoiNmZlYjcxZTktYzRlZC00MGQ2LWJjYzAtM2FlZDFiNGY2Y2ZmIiwidCI6ImZkMDE5MmU1LWIwMjktNGEwYi1hNzVjLTc1NTZiZWVhYmRhZiIsImMiOjR9"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </section>
  );
};
