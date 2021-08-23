import Image from 'next/image'

const MarketIntro = () => {
  return (
    <section className='benefits-section'>
      <div className='heading-div'>
        <h1>Fraktal Marketplace</h1>
        <h2>The Fraktal Marketplace leverages fractional NFTs to make digital assets available to everyone.</h2>

      </div>
      <div className='benefits-icon'>
        <Image src='/engage-icon.svg' width={180} height={180} alt='' />
        <p>Invest in high value NFTs otherwise out of reach.</p>
      </div>
      <div className='benefits-icon'>
        <Image src='/monetize-icon.svg' width={180} height={180} alt='' />
        <p>Retain Ownership when liquidity is needed by selling only a percentage of your NFT. </p>
      </div>
      <div className='benefits-icon'>
        <Image src='/retain-icon.svg' width={180} height={180} alt='' />
        <p>Use DAOs to conduct transactions directly on the marketplace as a community.</p>
      </div>


    </section>
  );
}

export default MarketIntro;
