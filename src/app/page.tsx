import { HeroSection } from '../features/landing/components/HeroSection';
import { LandingNavbar } from '../features/landing/components/LandingNavbar';

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <main className="px-8 mt-20  max-w-7xl w-full mx-auto">
        {/* <main className=""> */}
        <HeroSection />
      </main>
    </>
  );
}
