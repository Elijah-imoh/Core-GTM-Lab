import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import VideoSection from './components/VideoSection';
import HowItWorks from './components/HowItWorks';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import Solution from './components/WhoWeAre';
import FAQ from './components/FAQ';
import CtaFooter from './components/CtaFooter';

export default function App() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <div className="bg-black relative z-10">
        <WhoWeWorkWith /> {/* Problem/Outcome */}
        <Solution />      {/* Solution/Team */}
        <HowItWorks />    {/* Process */}
        <VideoSection />  {/* Proof */}
        <FAQ />
        <CtaFooter />
      </div>
    </main>
  );
}
