import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function Philosophy() {
  const [ref, isInView] = useInView(0.2)

  return (
    <section id="yaklasim" ref={ref} className="py-24 md:py-36 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left label */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-sage-dark font-medium">
                Yaklaşım
              </span>
              <div className="w-8 h-px bg-sage mt-4" />
            </motion.div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-graphite mb-8"
            >
              Gülüşünüzü değiştirmek değil,
              <br />
              <span className="italic text-sage-dark">onunla uyum sağlamak.</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-graphite/60 leading-[1.8] font-light">
                  Her hastanın yüz yapısı, gülüş çizgisi ve beklentileri farklıdır.
                  Tedavi sürecini bu farklılıklar üzerine inşa ediyor, doğal
                  görünümü koruyarak estetik ve fonksiyonel sonuçlar elde ediyoruz.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-graphite/60 leading-[1.8] font-light">
                  Dijital planlama araçları ve güncel tekniklerle desteklenen
                  kişiselleştirilmiş tedavi yaklaşımımız, hassasiyet ve konfor
                  arasında denge kurar. Amacımız, güvenle gülümseyebileceğiniz
                  doğal sonuçlar sunmaktır.
                </p>
              </motion.div>
            </div>

            {/* Three pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-graphite/8"
            >
              {[
                { label: 'Doğallık', desc: 'Yüz yapınızla uyumlu sonuçlar' },
                { label: 'Hassasiyet', desc: 'Dijital destekli planlama' },
                { label: 'Güven', desc: 'Şeffaf tedavi süreci' },
              ].map((item, i) => (
                <div key={i} className="text-center md:text-left">
                  <h3 className="font-serif text-lg md:text-xl text-graphite mb-2">{item.label}</h3>
                  <p className="text-[13px] text-graphite/50 font-light hidden md:block">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
