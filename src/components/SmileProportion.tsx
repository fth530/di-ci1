import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function SmileProportion() {
  const [ref, isInView] = useInView(0.15)

  return (
    <section ref={ref} className="relative py-24 md:py-40 bg-bone overflow-hidden">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Golden ratio spiral - abstract */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] opacity-[0.04]"
          viewBox="0 0 800 800"
          fill="none"
        >
          <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="0.5" className="text-graphite" />
          <circle cx="400" cy="400" r="235" stroke="currentColor" strokeWidth="0.5" className="text-graphite" />
          <circle cx="400" cy="400" r="145" stroke="currentColor" strokeWidth="0.5" className="text-graphite" />
          <circle cx="400" cy="400" r="90" stroke="currentColor" strokeWidth="0.5" className="text-graphite" />
          <line x1="20" y1="400" x2="780" y2="400" stroke="currentColor" strokeWidth="0.5" className="text-graphite" />
          <line x1="400" y1="20" x2="400" y2="780" stroke="currentColor" strokeWidth="0.5" className="text-graphite" />
          <line x1="105" y1="105" x2="695" y2="695" stroke="currentColor" strokeWidth="0.3" className="text-graphite" />
          <line x1="695" y1="105" x2="105" y2="695" stroke="currentColor" strokeWidth="0.3" className="text-graphite" />
        </svg>

        {/* Fibonacci rectangles */}
        <svg
          className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <rect x="10" y="10" width="580" height="580" stroke="currentColor" strokeWidth="0.5" className="text-graphite" />
          <rect x="10" y="10" width="358" height="358" stroke="currentColor" strokeWidth="0.5" className="text-graphite" />
          <rect x="10" y="368" width="222" height="222" stroke="currentColor" strokeWidth="0.5" className="text-graphite" />
          <rect x="232" y="368" width="136" height="136" stroke="currentColor" strokeWidth="0.5" className="text-graphite" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Typography composition */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-[11px] tracking-[0.2em] uppercase text-sage-dark font-medium"
            >
              Oran &middot; Denge &middot; Uyum
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="font-serif text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] text-graphite mt-6 mb-8"
            >
              Gülüş,
              <br />
              bir <span className="italic text-sage-dark">orantıdır.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <p className="text-graphite/55 leading-[1.8] font-light max-w-md">
                Doğal bir gülüş, yüz simetrisinden dudak çizgisine, diş
                oranlarından diş eti seviyesine kadar birçok unsurun
                dengesiyle oluşur.
              </p>
              <p className="text-graphite/55 leading-[1.8] font-light max-w-md">
                Estetik diş hekimliği, bu dengeyi anlamak ve her bireyin
                kendine özgü yüz yapısıyla uyumlu sonuçlar elde etmek
                üzerine kuruludur.
              </p>
            </motion.div>
          </div>

          {/* Right - Visual composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="/images/proportion.jpg"
                alt="Doğal oran ve denge"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bone/40 to-transparent" />

              {/* Overlay proportional lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 400 500"
                fill="none"
                preserveAspectRatio="none"
              >
                <line x1="0" y1="191" x2="400" y2="191" stroke="white" strokeWidth="0.5" />
                <line x1="0" y1="309" x2="400" y2="309" stroke="white" strokeWidth="0.5" />
                <line x1="153" y1="0" x2="153" y2="500" stroke="white" strokeWidth="0.5" />
                <line x1="247" y1="0" x2="247" y2="500" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-cream px-6 py-4 shadow-sm">
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-dark block">Altın Oran</span>
              <span className="font-serif text-2xl text-graphite">1 : 1.618</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
