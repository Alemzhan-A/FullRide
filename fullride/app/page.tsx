import Header from './components/Header';
import Hero from './components/ui/Hero';
import UniversitiesScroll from './components/ui/UniversitiesScroll';
import HowItWorks from './components/ui/HowItWorks';
import Author from './components/ui/Author';
import AIAssistant from './components/ui/AIAssistant';
import FAQ from './components/ui/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <Hero />
      <UniversitiesScroll />
      <HowItWorks />
      <AIAssistant />
      <Author />
      <FAQ />
      <Footer />
    </main>
  );
}
