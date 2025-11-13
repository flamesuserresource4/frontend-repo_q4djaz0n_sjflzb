import { useState } from 'react'
import HeroSection from './HeroSection'
import TechSection from './components/TechSection'
import DesignSection from './components/DesignSection'
import ExperienceSection from './components/ExperienceSection'
import ProductViewer from './components/ProductViewer'
import SiteFooter from './components/SiteFooter'
import PreorderModal from './components/PreorderModal'

function App() {
  const [modalColor, setModalColor] = useState(null)

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-gray-900 dark:text-white">
      <HeroSection />
      <TechSection />
      <DesignSection />
      <ExperienceSection />
      <ProductViewer onPreorder={(c)=>setModalColor(c)} />
      <SiteFooter />
      <PreorderModal open={!!modalColor} color={modalColor || 'black'} onClose={() => setModalColor(null)} />
    </div>
  )
}

export default App
