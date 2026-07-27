import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesAndWorks from '../components/ServicesAndWorks';
import TechStackAndFooter from '../components/TechStackAndFooter';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#007AFF] selection:text-white">
      <Navbar />
      <Hero />
      <ServicesAndWorks />
      <TechStackAndFooter />
    </main>
  );
}
