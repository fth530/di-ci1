import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import DigitalDentistry from './components/DigitalDentistry'
import Treatments from './components/Treatments'
import SmileProportion from './components/SmileProportion'
import DoctorProfile from './components/DoctorProfile'
import ClinicExperience from './components/ClinicExperience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <DigitalDentistry />
        <Treatments />
        <SmileProportion />
        <DoctorProfile />
        <ClinicExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
