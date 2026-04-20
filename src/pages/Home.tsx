import HeroHome from '../components/sections/HeroHome'
import CirurgiaRoboticaHighlight from '../components/sections/CirurgiaRoboticaHighlight'
import Diferenciais from '../components/sections/Diferenciais'
import LaserHighlight from '../components/sections/LaserHighlight'
import SobreDoutor from '../components/sections/SobreDoutor'
import BlogPreview from '../components/sections/BlogPreview'
import CtaBanner from '../components/ui/CtaBanner'
import ContactMini from '../components/sections/ContactMini'

export default function Home() {
  return (
    <>
      <HeroHome />
      <CirurgiaRoboticaHighlight />
      <Diferenciais />
      <LaserHighlight />
      <SobreDoutor />
      <BlogPreview />
      <CtaBanner />
      <ContactMini />
    </>
  )
}
