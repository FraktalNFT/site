import Image from 'next/image'

const Benefits = () => {
  return (
    <section className='benefits-section'>
      <div className='heading-div'>
        <h2>THE MARKETPLACE</h2>
        <h4></h4>
      </div>
      <div className='benefits-icon'>
        <Image src='/engage-icon.svg' width={180} height={180} alt='' />
        <p>Fractionalise NFTs</p>
      </div>
      <div className='benefits-icon'>
        <Image src='/monetize-icon.svg' width={180} height={180} alt='' />
        <p>Automate Royalties</p>
      </div>
      <div className='benefits-icon'>
        <Image src='/retain-icon.svg' width={180} height={180} alt='' />
        <p>Buy & Sell Fraktions</p>
      </div>
    </section>
  );
}

export default Benefits;
