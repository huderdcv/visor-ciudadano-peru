import { HeroSection } from '../features/landing/components/HeroSection';
import { LandingNavbar } from '../features/landing/components/LandingNavbar';
import { SummarySection } from '../features/landing/components/SummarySection';

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <main className="mt-20">
        {/* <main className=""> */}
        <HeroSection />
        <SummarySection />
      </main>
    </>
  );
}
