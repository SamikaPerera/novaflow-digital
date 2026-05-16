import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import FloatingContactButton from '../components/FloatingContactButton'
import AnimatedBackground from '../components/AnimatedBackground'

export default function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  )
}