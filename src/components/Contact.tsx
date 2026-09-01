import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Phone, Mail, MapPin, Check, ArrowRight } from 'lucide-react'

const treatmentOptions = [
  'Estetik Diş Hekimliği',
  'Gülüş Tasarımı',
  'İmplant',
  'Diş Beyazlatma',
  'Kanal Tedavisi',
  'Diş Protezi',
  'Dolgu',
  'Pedodonti',
  'Periodontoloji',
  'Ağız ve Çene Cerrahisi',
  'Diğer',
]

export default function Contact() {
  const [ref, isInView] = useInView(0.1)
  const [formState, setFormState] = useState<'idle' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setFormState('success')
    setTimeout(() => {
      setFormState('idle')
      setFormData({ name: '', phone: '', treatment: '', message: '' })
    }, 4000)
  }

  return (
    <section id="iletisim" ref={ref} className="py-24 md:py-36 bg-graphite">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left - Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-sage-light font-medium">
                İletişim
              </span>
              <div className="w-8 h-px bg-sage mt-4 mb-8" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-cream mb-6"
            >
              Randevunuzu
              <br />
              <span className="italic text-sage-light">oluşturun.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-cream/40 leading-relaxed font-light text-sm mb-12 max-w-sm"
            >
              Tedavi süreciniz hakkında bilgi almak veya randevu oluşturmak
              için formu doldurun ya da doğrudan bize ulaşın.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <a
                href="tel:02222205555"
                className="flex items-start gap-4 group"
              >
                <Phone size={16} className="text-sage-light mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-cream/30 block mb-1">Telefon</span>
                  <span className="text-cream/70 text-sm group-hover:text-cream transition-colors">0 (222) 220 55 55</span>
                  <br />
                  <span className="text-cream/70 text-sm group-hover:text-cream transition-colors">0 (532) 475 08 17</span>
                </div>
              </a>

              <a
                href="mailto:info@ozlemersoz.com"
                className="flex items-start gap-4 group"
              >
                <Mail size={16} className="text-sage-light mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-cream/30 block mb-1">E-posta</span>
                  <span className="text-cream/70 text-sm group-hover:text-cream transition-colors">info@ozlemersoz.com</span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-sage-light mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-cream/30 block mb-1">Adres</span>
                  <span className="text-cream/70 text-sm leading-relaxed">
                    Yenibağlar, İsmet İnönü-1 Blv No:102/D,<br />
                    26170 Tepebaşı / Eskişehir
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-cream/[0.04] rounded-sm p-8 md:p-12"
            >
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-sage/20 flex items-center justify-center mb-6">
                    <Check size={24} className="text-sage-light" />
                  </div>
                  <h3 className="font-serif text-2xl text-cream mb-3">Talebiniz Alındı</h3>
                  <p className="text-cream/40 text-sm font-light">En kısa sürede sizinle iletişime geçeceğiz.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="text-[11px] tracking-[0.15em] uppercase text-cream/30 block mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-cream/10 pb-3 text-cream text-sm font-light focus:outline-none focus:border-sage-light transition-colors placeholder:text-cream/15"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-[11px] tracking-[0.15em] uppercase text-cream/30 block mb-2">
                        Telefon *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-cream/10 pb-3 text-cream text-sm font-light focus:outline-none focus:border-sage-light transition-colors placeholder:text-cream/15"
                        placeholder="05XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="treatment" className="text-[11px] tracking-[0.15em] uppercase text-cream/30 block mb-2">
                      İlgilendiğiniz Tedavi
                    </label>
                    <select
                      id="treatment"
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full bg-transparent border-b border-cream/10 pb-3 text-cream text-sm font-light focus:outline-none focus:border-sage-light transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-graphite">Seçiniz</option>
                      {treatmentOptions.map((t) => (
                        <option key={t} value={t} className="bg-graphite">{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-[11px] tracking-[0.15em] uppercase text-cream/30 block mb-2">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-cream/10 pb-3 text-cream text-sm font-light focus:outline-none focus:border-sage-light transition-colors resize-none placeholder:text-cream/15"
                      placeholder="Mesajınız (isteğe bağlı)"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 w-full md:w-auto px-10 py-4 bg-sage text-cream text-[13px] font-medium tracking-[0.1em] uppercase rounded-full hover:bg-sage-dark transition-colors duration-300 flex items-center justify-center gap-3 group"
                  >
                    Randevu Al
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
