import Image from 'next/image'
import App from './app'

function Home() {
  return (
    <>
      <Image
      alt="background"
      src="/images/Background.jpg"
      width={2560}
      height={1440}
      className='root-bg'
      sizes='(max-width:768px) 100vw, (max-width:1919px) 1920px'
      />
      <App />
      </>

    
  )
}

export default Home;