import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { PhilosophySection } from '@/components/PhilosophySection'
import { MechanismSection } from '@/components/MechanismSection'
import { ComingSoonSection } from '@/components/ComingSoonSection'
import { SimplePixelBg } from '@/components/SimplePixelBg'

export const metadata = {
  title: 'halt. - Digital Willpower is a Lie',
  description:
    'Halt is the un-bypassable physical circuit breaker for your screen addiction. The hardware solution to software weakness.',
}

export default function Home() {
  return (
    <main className="bg-black relative">
      <SimplePixelBg />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <PhilosophySection />
        <MechanismSection />
        <ComingSoonSection />
      </div>
    </main>
  )
}
