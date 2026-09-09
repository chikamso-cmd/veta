import AboutUs from '@/components/AboutUs'
import CallToAction from '@/components/Calltoaction'
import CapabilityAssessment from '@/components/Capabilities'
import Contact from '@/components/Contact'
import ForCompanies from '@/components/Forcompanies'
import ForProfessionals from '@/components/Forprofessionals'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/Howitworks'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutUs />
        <HowItWorks />
        <ForProfessionals />
        <ForCompanies />
        <CapabilityAssessment />
        <Contact />
        <CallToAction />
      </main>
    </>
  )
}

