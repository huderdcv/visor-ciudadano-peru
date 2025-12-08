import { ExternalLink, ShieldUser } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const LandingFooter = () => {
  return (
    <footer className="flex flex-col items-center py-16 px-9">
      <Link href={'/'} className="flex gap-2 items-center group ">
        <ShieldUser className="bg-blue-700 text-white  w-10 h-10 p-2 rounded-lg group-hover:bg-blue-800 transition-all duration-300 mb-3" />
      </Link>
      <p className="text-lg text-slate-700 mb-7 font-semibold dark:text-slate-300">
        &copy; 2025 Visor Ciudadano Perú
      </p>
      <p className=" text-center text-slate-500 dark:text-slate-400 text-sm mb-2">
        Construido con Datos Abiertos del Sistema de Denuncias Policiales
        (SIDPOL) de la Policia Nacional de Perú.
      </p>
      <Link
        target="_blank"
        href={`https://www.datosabiertos.gob.pe/dataset/denuncias-policiales/resource/64c01d53-4402-4e5a-936a-4bce5b3d1008`}
        className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm hover:text-blue-400 transition-all duration-300"
      >
        <span>Datos abiertos</span> <ExternalLink className="w-4 h-4" />
      </Link>
    </footer>
  );
};
