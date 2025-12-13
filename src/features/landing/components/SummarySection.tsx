import { ChartColumnBig, Check } from 'lucide-react';
import React from 'react';

export const SummarySection = () => {
  return (
    <section
      id="panorama"
      className="px-8 max-w-7xl w-full mx-auto pt-24 pb-24 border-b border-slate-200 dark:border-slate-800"
    >
      <header>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 dark:border dark:border-slate-500 mb-8">
          <ChartColumnBig className="w-8 h-8 " />
        </div>
        <h2 className="text-2xl font-semibold mb-3">
          Panorama de la Seguridad Ciudadana en el Perú (2018-2025)
        </h2>
      </header>
      <p className="text-lg text-slate-500 dark:text-slate-400 mb-7">
        Acceda al análisis más completo de la incidencia delictiva a nivel
        nacional. Esta herramienta interactiva procesa miles de denuncias
        oficiales para identificar los departamentos, provincias y distritos con
        mayor índice de criminalidad. Visualice la evolución histórica de
        delitos de alto impacto (robos, extorsiones, homicidios, hurtos, estafas
        y otros) y filtre la información para tomar decisiones basadas en datos
        reales.
      </p>
      <ul className="flex flex-col gap-3 mb-12">
        <li className="flex gap-2">
          <div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 dark:bg-emerald-900">
              <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-300 stroke-3" />
            </div>
          </div>
          <span className="text-slate-600 dark:text-slate-300">
            <span className="font-medium">Tendencias Históricas:</span> Analice
            el crecimiento o disminución del crimen desde el 2018 hasta la
            actualidad.
          </span>
        </li>
        <li className="flex gap-2">
          <div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 dark:bg-emerald-900">
              <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-300 stroke-3" />
            </div>
          </div>
          <span className="text-slate-600 dark:text-slate-300 ">
            <span className="font-medium">Ranking Geográfico:</span> Identifique
            las Zonas Rojas y compare la seguridad entre diferentes
            jurisdicciones.
          </span>
        </li>
        <li className="flex gap-2">
          <div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 dark:bg-emerald-900">
              <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-300 stroke-3" />
            </div>
          </div>
          <span className="text-slate-600 dark:text-slate-300 ">
            <span className="font-medium">Filtros de Precisión:</span> Segmente
            la data por año, tipo de delito y ubicación exacta para un análisis
            granular.
          </span>
        </li>
      </ul>
      <div className="w-full bg-slate-100 rounded-lg flex items-center justify-center border-2 border-slate-200 text-slate-500 aspect-video overflow-hidden">
        <iframe
          title="test-visor-ciudadano"
          // width="1024"
          // height="1060"
          className="w-full h-full border-0"
          src="https://app.powerbi.com/view?r=eyJrIjoiMTgwZGVkYmUtOWIxZi00ZDFmLWFhZWItZDRiZDhhYjAxZmYwIiwidCI6ImZkMDE5MmU1LWIwMjktNGEwYi1hNzVjLTc1NTZiZWVhYmRhZiIsImMiOjR9"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </section>
  );
};
