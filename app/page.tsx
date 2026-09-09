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
        <HowItWorks />
        <ForProfessionals />
      </main>
    </>
  )
}

