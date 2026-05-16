import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Menu, X, Sun, Moon } from 'lucide-react'
import useTheme from '../hooks/useTheme'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const { isDark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[#060612]/80 backdrop-blur-2xl border-b border-white/[0.06]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-nova-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-nova-500/30 group-hover:shadow-nova-500/50 transition-shadow duration-300">
              <Zap size={16} className="text-white fill-white" />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              Nova<span className="gradient-text">Flow</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-body font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/90'
                }`}
              >
                {pathname === link.href && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-lg bg-white/[0.07]"
                    transition={{ type: 'spring', duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <Link to="/contact" className="btn-primary text-xs py-2.5">
              <Zap size={13} />
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/50 hover:text-white"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setIsMobileOpen(prev => !prev)}
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/70 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-4 right-4 z-40 rounded-2xl glass-strong border border-white/10 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'bg-nova-500/20 text-nova-300'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-white/[0.06]">
                <Link to="/contact" className="btn-primary w-full justify-center text-xs py-3">
                  <Zap size={13} />
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}