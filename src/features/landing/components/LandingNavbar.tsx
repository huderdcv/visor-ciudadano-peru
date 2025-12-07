import Link from 'next/link';
import { ModeToggle } from '../../../components/ModeToggle';
import { ShieldUser } from 'lucide-react';

export const LandingNavbar = () => {
  return (
    <header className="flex justify-between items-center h-20 shadow-md p-12 fixed top-0 w-full dark:border-b dark:border-slate-800">
      <Link href={'/'} className="flex gap-2 items-center group">
        <ShieldUser className="bg-blue-700 text-white  w-10 h-10 p-2 rounded-lg group-hover:bg-blue-800 transition-all duration-300" />
        <span className="font-bold text-xl">Visor Ciudadano</span>
      </Link>
      <nav>
        <Link
          href={'/'}
          className="text-lg text-slate-500 font-semibold px-4 py-2 rounded-4xl hover:text-blue-500 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-slate-800"
        >
          Resumen
        </Link>
      </nav>
      <ModeToggle />
    </header>
  );
};
