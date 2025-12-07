import { ChartColumnBig, Check } from 'lucide-react';
import React from 'react';

export const SummarySection = () => {
  return (
    <section
      id="resumen"
      className="px-8 max-w-7xl w-full mx-auto h-screen mt-24"
    >
      <header>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-200 mb-8">
          <ChartColumnBig className="w-8 h-8 " />
        </div>
        <h2 className="text-2xl font-semibold mb-3">Panorama Nacional</h2>
      </header>
      <p className="text-lg text-slate-500 mb-7">
        Este primer panel ofrece una visión consolidada de las denuncias a nivel
        nacional. Observe la evolución temporal mes a mes y compare el desempeño
        actual contra años anteriores.
      </p>
      <ul className="flex flex-col gap-3 mb-12">
        <li className="flex gap-2">
          <div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200">
              <Check className="w-4 h-4 text-emerald-500 stroke-3" />
            </div>
          </div>
          <span className="text-slate-600">
            Indicadores KPI de volumen total y variación porcentual.
          </span>
        </li>
        <li className="flex gap-2">
          <div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200">
              <Check className="w-4 h-4 text-emerald-500 stroke-3" />
            </div>
          </div>
          <span className="text-slate-600">
            Gráficos de tendencia temporal (Line Charts).
          </span>
        </li>
        <li className="flex gap-2">
          <div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200">
              <Check className="w-4 h-4 text-emerald-500 stroke-3" />
            </div>
          </div>
          <span className="text-slate-600">
            Filtros para ver los indicadores por distrito, provincia o
            departamento.
          </span>
        </li>
      </ul>
      <div className="w-full bg-slate-100 h-60 rounded-lg flex items-center justify-center border-2 border-slate-200 text-slate-500">
        Power BI: Dashboard de resumen
      </div>
    </section>
  );
};
