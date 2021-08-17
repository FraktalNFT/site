import Image from 'next/image'

const Benefits = () => {
  return (
    <section className='benefits-section'>
      <div className='heading-div'>
        <h1>Fraktal Marketplace </h1>
        <h2>Made by DAOs for DAOs.</h2>
        <br></br>
        <h4>The Fraktal Marketplace is the first NFT marketplace designed for DAOs. Shopping is more fun with friends.</h4>
      </div>
      <div className='benefits-icon'>
        <Image src='/engage-icon.svg' width={180} height={180} alt='' />
        <p>Co-Invest - Directly purchase any NFT from the marketplace directly from a DAO&apos;s shared funds.</p>
      </div>
      <div className='benefits-icon'>
        <Image src='/monetize-icon.svg' width={180} height={180} alt='' />
        <p>Liquidate DAO Assets by selling native NFTs or Fraktions through fixed price or auction listings.</p>
      </div>
      <div className='benefits-icon'>
        <Image src='/retain-icon.svg' width={180} height={180} alt='' />
        <p>Send & Receive Licensing Revenue to any fractionalised NFT.</p>
      </div>
      <div className='benefits-icon'>
        <Image src='/retain-icon.svg' width={180} height={180} alt='' />
        <p>So much cool stuff we haven&apos;t thought of yet.</p>
      </div>
    </section>
  );
}

export default Benefits;
