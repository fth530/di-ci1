import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-bone">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-bone via-bone/95 to-bone/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-bone via-transparent to-bone/30 z-10" />
        <img
          src="/images/smile.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-60"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-10 w-full pb-16 md:pb-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left - Headlines */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-[11px] md:text-[13px] font-medium tracking-[0.2em] uppercase text-sage-dark mb-6 md:mb-8">
                Diş Hekimliği &middot; Eskişehir
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.92] text-graphite mb-6 md:mb-8"
            >
              Doğal Olan<br />
              <span className="italic text-sage-dark">En Güzelidir.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-graphite/60 max-w-lg leading-relaxed font-light"
            >
              Her gülüş kendine özgüdür. Dt. Özlem Ersöz, yirmi yılı aşkın deneyimiyle
              doğal estetiğinizi koruyarak size özel tedavi planları sunar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 mt-8 md:mt-10"
            >
              <button
                onClick={() => scrollTo('#iletisim')}
                className="px-8 py-3.5 bg-graphite text-cream text-[13px] font-medium tracking-[0.1em] uppercase rounded-full hover:bg-graphite-light transition-colors duration-300"
              >
                Randevu Al
              </button>
              <button
                onClick={() => scrollTo('#tedaviler')}
                className="px-8 py-3.5 border border-graphite/20 text-graphite text-[13px] font-medium tracking-[0.1em] uppercase rounded-full hover:border-graphite/40 hover:bg-graphite/5 transition-all duration-300"
              >
                Tedavileri Keşfet
              </button>
            </motion.div>
          </div>

          {/* Right - Decorative info */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-right"
            >
              <div className="w-px h-16 bg-graphite/15 ml-auto mb-6" />
              <p className="text-[11px] tracking-[0.2em] uppercase text-graphite/40 mb-1">2002'den bu yana</p>
              <p className="font-serif text-lg text-graphite/60 italic">Kişiye özel diş hekimliği</p>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-graphite/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
