import HeroSection from './HeroSection'
import TechSection from './components/TechSection'
import DesignSection from './components/DesignSection'
import ExperienceSection from './components/ExperienceSection'
import ProductViewer from './components/ProductViewer'
import SiteFooter from './components/SiteFooter'

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <HeroSection />
      <TechSection />
      <DesignSection />
      <ExperienceSection />
      <ProductViewer />
      <SiteFooter />
    </div>
  )
}

export default App
