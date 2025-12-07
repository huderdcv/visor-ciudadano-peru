'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const onChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <button
      onClick={onChangeTheme}
      className="flex justify-center items-center transition-all duration-300 dark:bg-blue-950  cursor-pointer w-10 h-10 border-2 border-slate-300 shadow-sm text-slate-500 rounded-lg bg-white hover:border-blue-200 hover:text-blue-500"
    >
      <Sun className="scale-0 absolute dark:scale-100 rotate-0 dark:rotate-90 transition-all" />
      <Moon className="dark:scale-0 rotate-0 dark:rotate-90 transition-all" />
    </button>
  );
};
