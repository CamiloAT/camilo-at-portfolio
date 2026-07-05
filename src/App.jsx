import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader/Preloader'
import Hero from './components/Hero/Hero'
import Particles from './components/Particles/Particles'
import Dock from './components/Dock/Dock'
import Story from './sections/Story/Story'
import Work from './sections/Work/Work'
import Craft from './sections/Craft/Craft'
import Outro from './sections/Outro/Outro'
import Projects from './pages/Projects/Projects'
import './App.css'

function HomePage() {
  return (
    <>
      <Particles count={25} />
      <Dock />

      <main className="main">
        <Hero />
        <Story />
        <Work />
        <Craft />
        <Outro />
      </main>
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <BrowserRouter>
      <div className="app">
        <AnimatePresence>
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
