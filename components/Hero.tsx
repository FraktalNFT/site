import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='hero-section'>
      <h1>FRAKTAL</h1>
      <Image src='/fraktal-logo-large.svg' width={800} height={400} alt='' />
      <div>
        <h2>FRACTIONAL</h2>
        <Image src='/single-leaf.svg' width={55} height={55} alt='' />
        <h2>NFTS</h2>
      </div> 
      <Link href='https://fraktal-front-git-web3-integration-sunguru98.vercel.app/'><button>Get Started</button></Link>
    </section>
  );
}

export default Hero;
