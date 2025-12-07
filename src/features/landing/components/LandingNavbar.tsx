'use client';

import Link from 'next/link';
import { ModeToggle } from '../../../components/ModeToggle';
import { Menu, ShieldUser, X } from 'lucide-react';
import { useState } from 'react';

export const LandingNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="flex justify-between items-center h-20 shadow-md px-8 fixed z-40 top-0 w-full dark:border-b dark:border-slate-800">
      <Link href={'/'} className="flex gap-2 items-center group">
        <ShieldUser className="bg-blue-700 text-white  w-10 h-10 p-2 rounded-lg group-hover:bg-blue-800 transition-all duration-300" />
        <span className="font-bold text-xl hidden lg:block">
          Visor Ciudadano
        </span>
      </Link>

      {/* toogle button for mobile */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="absolute cursor-pointer left-1/2 -translate-x-1/2  z-60 hover:border-blue-200 hover:text-blue-500 transition-all duration-300 md:hidden"
      >
        <Menu
          className={`transition-all duration-300 absolute ${
            !isNavOpen ? ' scale-100 rotate-0' : ' scale-0 rotate-90'
          }`}
        />
        <X
          className={`transition-all duration-300  ${
            !isNavOpen ? 'scale-0 rotate-0' : 'scale-100 rotate-90'
          }`}
        />
      </button>

      {/* nav for desktop */}
      <nav className="flex absolute left-1/2 -translate-x-1/2">
        <Link
          href={'/#resumen'}
          className="text-lg text-slate-500 font-semibold px-4 py-2 rounded-4xl hover:text-blue-500 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-slate-800 hidden md:block"
        >
          Resumen
        </Link>
        <Link
          href={'/'}
          className="text-lg text-slate-500 font-semibold px-4 py-2 rounded-4xl hover:text-blue-500 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-slate-800 hidden md:block"
        >
          Mapa de calor
        </Link>
        <Link
          href={'/'}
          className="text-lg text-slate-500 font-semibold px-4 py-2 rounded-4xl hover:text-blue-500 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-slate-800 hidden md:block"
        >
          Tendencias
        </Link>
      </nav>

      {/* nav for mobile */}
      <div
        className={`bg-slate/20 fixed inset-0 z-50 w-full backdrop-blur-lg md:hidden transition-all duration-500 ${
          isNavOpen ? '' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <nav className="absolute top-0 right-0 h-full w-full pt-32 flex flex-col items-center">
          <Link
            href={'/#resumen'}
            className="text-lg text-slate-500 font-semibold px-4 py-2 rounded-4xl hover:text-blue-500 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-slate-800 "
          >
            Resumen
          </Link>
          <Link
            href={'/'}
            className="text-lg text-slate-500 font-semibold px-4 py-2 rounded-4xl hover:text-blue-500 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-slate-800 "
          >
            Mapa de Calor
          </Link>
          <Link
            href={'/'}
            className="text-lg text-slate-500 font-semibold px-4 py-2 rounded-4xl hover:text-blue-500 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-slate-800"
          >
            Tendencias
          </Link>
        </nav>
      </div>
      <ModeToggle />
    </header>
  );
};
