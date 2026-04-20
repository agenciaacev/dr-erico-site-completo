import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'

import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import HoLEP from './pages/HoLEP'
import CirurgiaRobotica from './pages/CirurgiaRobotica'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contato from './pages/Contato'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    })
  }, [])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dr-erico-diogenes" element={<Sobre />} />
          <Route path="/holep" element={<HoLEP />} />
          <Route path="/cirurgia-robotica" element={<CirurgiaRobotica />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
