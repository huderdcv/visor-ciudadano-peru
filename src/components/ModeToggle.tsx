'use client';
import { useTheme } from 'next-themes';

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const onChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <button
      onClick={onChangeTheme}
      className="bg-blue-500 dark:bg-blue-950 px-6 py-2 cursor-pointer"
    >
      Change theme
    </button>
  );
};
