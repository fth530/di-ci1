import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from './useInView'
import { ChevronRight } from 'lucide-react'

const treatments = [
  {
    num: '01',
    title: 'Estetik Diş Hekimliği',
    desc: 'Dişlerin renk, şekil ve dizilimindeki estetik sorunların giderilmesine yönelik uygulamaları kapsar. Doğal görünüm ve yüz uyumu ön plandadır.',
  },
  {
    num: '02',
    title: 'Gülüş Tasarımı',
    desc: 'Yüz yapısı, dudak hattı ve diş oranları dikkate alınarak kişiye özel gülüş estetiği planlaması yapılır.',
  },
  {
    num: '03',
    title: 'İmplant',
    desc: 'Eksik dişlerin yerine, çene kemiğine yerleştirilen titanyum vidalar üzerine protez dişlerin uygulanmasıdır.',
  },
  {
    num: '04',
    title: 'Dijital Diş Hekimliği',
    desc: 'Dijital ölçüm, planlama ve görüntüleme teknolojileri ile desteklenen modern tedavi yaklaşımlarıdır.',
  },
  {
    num: '05',
    title: 'Diş Beyazlatma',
    desc: 'Dişlerdeki renk değişimlerinin giderilmesi ve doğal diş tonunun aydınlatılmasına yönelik uygulamalardır.',
  },
  {
    num: '06',
    title: 'Kanal Tedavisi',
    desc: 'İltihaplanmış veya enfekte olmuş diş sinirinin tedavi edilerek dişin korunmasını amaçlayan endodontik işlemdir.',
  },
  {
    num: '07',
    title: 'Diş Protezi',
    desc: 'Eksik dişlerin sabit veya hareketli protezlerle tamamlanması ile fonksiyon ve estetiğin yeniden kazandırılmasıdır.',
  },
  {
    num: '08',
    title: 'Dolgu',
    desc: 'Çürük veya hasarlı diş dokusunun uygun malzemelerle onarılarak dişin fonksiyonunun geri kazandırılmasıdır.',
  },
  {
    num: '09',
    title: 'Pedodonti',
    desc: 'Çocuk diş hekimliği; bebek ve çocukların ağız-diş sağlığının koruyucu ve tedavi edici yaklaşımlarla takibidir.',
  },
  {
    num: '10',
    title: 'Periodontoloji',
    desc: 'Diş eti hastalıklarının teşhis ve tedavisi ile diş destek dokularının sağlığının korunmasına yönelik uygulamalardır.',
  },
  {
    num: '11',
    title: 'Ağız ve Çene Cerrahisi',
    desc: 'Gömülü diş çekimi, çene kisti tedavisi ve implant cerrahisi gibi cerrahi müdahaleleri kapsayan branştır.',
  },
]

export default function Treatments() {
  const [ref, isInView] = useInView(0.1)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="tedaviler" ref={ref} className="py-24 md:py-36 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-sage-dark font-medium">
                Tedavi Alanları
              </span>
              <div className="w-8 h-px bg-sage mt-4 mb-6" />
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-graphite mb-6">
                Kapsamlı diş
                <br />
                <span className="italic text-sage-dark">hekimliği hizmetleri.</span>
              </h2>
              <p className="text-graphite/50 leading-relaxed font-light text-sm">
                Her tedavi, bireysel ihtiyaçlarınıza göre planlanır.
                Detaylı bilgi için randevu oluşturabilirsiniz.
              </p>
            </motion.div>
          </div>

          {/* Right - Treatment list */}
          <div className="lg:col-span-8">
            <div className="border-t border-graphite/8">
              {treatments.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.4) }}
                  className="border-b border-graphite/8"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                    className="w-full flex items-center gap-4 md:gap-8 py-5 md:py-6 text-left group"
                    aria-expanded={expandedIndex === i}
                  >
                    <span className="text-[11px] tracking-[0.1em] text-stone font-medium w-6 shrink-0">
                      {t.num}
                    </span>
                    <span className="font-serif text-lg md:text-xl text-graphite flex-1 group-hover:text-sage-dark transition-colors duration-300">
                      {t.title}
                    </span>
                    <ChevronRight
                      size={16}
                      className={`text-stone transition-transform duration-300 shrink-0 ${
                        expandedIndex === i ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pl-10 md:pl-14 pb-6 text-sm text-graphite/50 leading-relaxed font-light max-w-lg">
                          {t.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
