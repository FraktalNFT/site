import Link from 'next/link'
import Image from 'next/image'

const MarketGuide = () => {
  return (
    <section className='guide-section'>
      <h2>How it works</h2>
      <br></br>
        <br></br>
          <br></br>
      <div className='guide-icons'>
        <div>
          <Image src='/mint.svg' width={200} height={200} alt='' />
          <p>Fractionalize any NFT</p>
        </div>
        <div>
          <Image src='/frak.svg' width={200} height={200} alt='' />
          <p>Sell pieces of it on the marketplace</p>
        </div>
        <div>
          <Image src='/distribute.svg' width={200} height={200} alt='' />
          <p>Earn revenue from sales, royalties, and licensing.</p>
        </div>

      </div>
      <button>Join Testnet</button>
    {/*  <Link href='https://fraktal-front-git-web3-integration-sunguru98.vercel.app/'><button>Try It Out</button></Link> */}
    </section>
  );
}

export default MarketGuide;
