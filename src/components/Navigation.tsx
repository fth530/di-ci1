import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Tedaviler', href: '#tedaviler' },
  { label: 'Yaklaşım', href: '#yaklasim' },
  { label: 'Özlem Ersöz', href: '#hakkinda' },
  { label: 'Klinik', href: '#klinik' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const scrollTo = (href: string) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="relative z-10"
          >
            <span className="font-serif text-xl md:text-2xl text-graphite tracking-tight">
              Dt. Özlem Ersöz
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[13px] font-medium tracking-[0.08em] uppercase text-graphite/70 hover:text-graphite transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#iletisim')}
              className="ml-2 px-5 py-2.5 bg-graphite text-cream text-[13px] font-medium tracking-[0.08em] uppercase rounded-full hover:bg-graphite-light transition-colors duration-300"
            >
              Randevu Al
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative z-10 p-2 -mr-2"
            aria-label={isMobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-serif text-3xl text-graphite hover:text-sage transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                onClick={() => scrollTo('#iletisim')}
                className="mt-4 px-8 py-3 bg-graphite text-cream text-sm font-medium tracking-[0.08em] uppercase rounded-full"
              >
                Randevu Al
              </motion.button>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                href="tel:02222205555"
                className="mt-4 flex items-center gap-2 text-stone-dark text-sm"
              >
                <Phone size={14} />
                0 (222) 220 55 55
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
