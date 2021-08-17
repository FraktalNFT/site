import Link from 'next/link'
import Image from 'next/image'

const Values = () => {
  return (
    <section className='values-section'>
      <div className='eth-div'>
        <Image src='/eth-logo.svg' width={150} height={250} alt='' />
        <p>Just like DeFi did for boring old ERC-20 Tokens, DAOs will unlock the full power and capabilities to manage and monetise NFTs.</p>
      </div>
      <div className='join'>
        <h3><Link href='https://fraktal-front-git-web3-integration-sunguru98.vercel.app/'><a><b>JOIN FRAKTAL</b></a></Link>AND SHAPE THE FUTURE OF DAOs</h3>
        <div>
          <Link href='https://twitter.com/FraktalNFT'><a><Image src='/Twitter/Original.svg' width={37} height={37} alt='' /></a></Link>
          <Link href='https://www.instagram.com/fraktal.io/'><a><Image src='/Instagram/Original.svg' width={37} height={37} alt='' /></a></Link>
          <Link href='https://discord.gg/2378rAGuAX'><a><Image src='/Discord/Original.svg' width={37} height={37} alt='' /></a></Link>
        </div>
      </div>
    </section>
  );
}

export default Values;
