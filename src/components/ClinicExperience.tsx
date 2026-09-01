import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function ClinicExperience() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="klinik" ref={ref} className="py-24 md:py-36 bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-sage-dark font-medium">
                Klinik
              </span>
              <div className="w-8 h-px bg-sage mt-4" />
            </motion.div>
          </div>
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-graphite"
            >
              Sakin, modern
              <br />
              <span className="italic text-sage-dark">ve konforlu bir ortam.</span>
            </motion.h2>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:col-span-7 aspect-[16/10] overflow-hidden rounded-sm"
          >
            <img
              src="/images/clinic-1.jpg"
              alt="Klinik iç mekan"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.45 }}
            className="md:col-span-5 aspect-[16/10] md:aspect-auto overflow-hidden rounded-sm"
          >
            <img
              src="/images/clinic-2.jpg"
              alt="Klinik detay"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Clinic features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 md:mt-16 pt-12 border-t border-graphite/8"
        >
          {[
            { label: 'Doğal Işık', desc: 'Aydınlık ve ferah klinik ortamı' },
            { label: 'Modern Donanım', desc: 'Güncel tedavi teknolojileri' },
            { label: 'Konfor', desc: 'Rahat ve sakin tedavi deneyimi' },
            { label: 'Hijyen', desc: 'Yüksek sterilizasyon standartları' },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="font-serif text-base md:text-lg text-graphite mb-1">{item.label}</h3>
              <p className="text-[12px] md:text-[13px] text-graphite/45 font-light">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
