import { ModeToggle } from '../ModeToggle';

export const Navbar = () => {
  return (
    <header className="flex justify-between">
      <span>Visor Ciudadano</span>
      <ModeToggle />
    </header>
  );
};
