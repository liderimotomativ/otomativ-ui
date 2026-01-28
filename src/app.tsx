import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/content/AboutSection';
import ServicesSection from './components/content/ServicesSection';
import BatteryShowcase from './components/showcase/BatteryShowcase';
import TireShowcase from './components/showcase/TireShowcase';
import CarEvolution from './components/comparison/CarEvolution';
import WheelShowcase from './components/showcase/WheelShowcase';
import CarShowcase from './components/showcase/CarShowcase';
import TireInfo from './components/info/TireInfo';
import './app.css'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <BatteryShowcase />
        <TireShowcase />
        <WheelShowcase />
        <AboutSection />
        <ServicesSection />
        <CarEvolution />
        <CarShowcase />
        <TireInfo />
      </main>
      <Footer />
    </div>
  )
}
