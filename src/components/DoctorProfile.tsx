import { motion } from 'framer-motion'
import { useInView } from './useInView'

const timeline = [
  {
    year: '2002',
    title: 'Dicle Üniversitesi',
    desc: 'Diş Hekimliği Fakültesi mezuniyeti',
  },
  {
    year: '2002 — 2004',
    title: 'Özel Derman Polikliniği',
    desc: 'Klinik deneyim',
  },
  {
    year: '2004 — 2009',
    title: 'Özel Eskişehir ONVAK Hastanesi',
    desc: 'Klinik uygulama',
  },
  {
    year: '2009 — Günümüz',
    title: 'Özel Klinik',
    desc: 'Kişiye özel diş hekimliği pratiği, Eskişehir',
  },
]

export default function DoctorProfile() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="hakkinda" ref={ref} className="py-24 md:py-36 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="/images/doctor.jpg"
                  alt="Dt. Özlem Ersöz"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-graphite/80 to-transparent">
                <span className="text-[11px] tracking-[0.2em] uppercase text-cream/60 font-medium block mb-1">
                  Diş Hekimi
                </span>
                <span className="font-serif text-2xl md:text-3xl text-cream">
                  Dt. Özlem Ersöz
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right - Bio + Timeline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-sage-dark font-medium">
                Hakkında
              </span>
              <div className="w-8 h-px bg-sage mt-4 mb-8" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.1] text-graphite mb-8"
            >
              Yirmi yılı aşkın
              <br />
              <span className="italic text-sage-dark">klinik deneyim.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-graphite/55 leading-[1.8] font-light max-w-lg mb-12"
            >
              Dt. Özlem Ersöz, 2002 yılında Dicle Üniversitesi Diş Hekimliği
              Fakültesi'nden mezun olmuştur. Farklı klinik ortamlarda edindiği
              deneyimin ardından 2009 yılından bu yana Eskişehir'de kendi
              kliniğinde kişiye özel diş hekimliği hizmeti sunmaktadır.
            </motion.p>

            {/* Timeline */}
            <div className="border-t border-graphite/8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="grid grid-cols-12 gap-4 py-5 border-b border-graphite/8 group"
                >
                  <div className="col-span-4 md:col-span-3">
                    <span className="text-[12px] tracking-[0.05em] text-stone-dark font-medium">
                      {item.year}
                    </span>
                  </div>
                  <div className="col-span-8 md:col-span-9">
                    <h3 className="text-sm font-medium text-graphite group-hover:text-sage-dark transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-graphite/40 font-light mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
