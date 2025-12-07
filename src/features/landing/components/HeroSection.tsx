import React from 'react';

export const HeroSection = () => {
  return (
    <section className="px-8 max-w-7xl w-full mx-auto h-[calc(100vh-5rem)] border-b border-slate-200 dark:border-slate-800">
      <div className="w-full relative top-1/6 flex flex-col items-center">
        <p className="uppercase text-blue-400 font-semibold mb-9 text-center text-sm md:text-base flex items-center gap-1 border border-blue-200 dark:border-slate-500 px-2 py-1 rounded-3xl bg-blue-50 dark:bg-slate-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
          Datos actualizados a octubre 2025
        </p>
        <h1 className="text-center text-5xl md:text-7xl font-extrabold mb-8">
          Decide con libertad en{' '}
          <span className="text-blue-500 block">Cifras reales</span>
        </h1>
        <p className="text-center text-lg md:text-xl sm:max-w-lg md:max-w-xl text-slate-500">
          Accede a indicadores oficiales de seguridad ciudadana de cada distrito
          del Perú. Datos transparentes para que elijas dónde vivir, visitar o
          emprender con tranquilidad.
        </p>
      </div>
    </section>
  );
};
