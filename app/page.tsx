import Image from 'next/image'
import PricingSection from './PricingSection'

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PricingSection />

    </main>
  )
}

export default Home;