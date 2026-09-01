import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function DigitalDentistry() {
  const [ref, isInView] = useInView(0.15)

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-graphite overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/digital.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/95 to-graphite/80" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-[11px] tracking-[0.2em] uppercase text-sage-light font-medium"
            >
              Dijital + Estetik
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-cream mt-6 mb-8"
            >
              Teknoloji,
              <br />
              <span className="italic text-sage-light">doğallığın hizmetinde.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-cream/50 leading-[1.8] font-light max-w-md"
            >
              Dijital diş hekimliği, tedavi sürecinin her aşamasında daha
              hassas ölçümler, daha öngörülebilir sonuçlar ve daha konforlu
              bir deneyim sunar. Estetik diş hekimliğiyle birleştiğinde,
              doğal görünümü korurken işlevselliği en üst düzeye çıkarır.
            </motion.p>
          </div>

          {/* Right - Feature cards */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream/8">
              {[
                {
                  num: '01',
                  title: 'Dijital Planlama',
                  desc: 'Tedavi öncesi dijital analiz ile sonuçların önceden görselleştirilmesi.',
                },
                {
                  num: '02',
                  title: 'Hassas Ölçüm',
                  desc: 'Dijital ölçüm teknikleri ile milimetrik doğrulukta çalışma.',
                },
                {
                  num: '03',
                  title: 'Estetik Tasarım',
                  desc: 'Yüz yapısı ve gülüş çizgisiyle uyumlu bireysel estetik planlama.',
                },
                {
                  num: '04',
                  title: 'Konforlu Süreç',
                  desc: 'Modern tekniklerle tedavi süresinin ve rahatsızlığın azaltılması.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className="bg-cream/[0.03] p-8 md:p-10 group hover:bg-cream/[0.06] transition-colors duration-500"
                >
                  <span className="text-[11px] tracking-[0.15em] text-sage-light/60 font-medium">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-xl text-cream mt-3 mb-3">{item.title}</h3>
                  <p className="text-[13px] text-cream/40 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
