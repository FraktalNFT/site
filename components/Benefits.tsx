import Image from 'next/image'

const Benefits = () => {
  return (
    <section className='benefits-section'>
      <div className='heading-div'>
        <h1>Benefits</h1>

      </div>
      <div className='benefits-icon'>
        <Image src='/engage-icon.svg' width={180} height={180} alt='' />
        <p>Invest alongside the top collectors in the industry.</p>
      </div>
      <div className='benefits-icon'>
        <Image src='/monetize-icon.svg' width={180} height={180} alt='' />
        <p>Curate and manage high value NFTs with an amazing community</p>
      </div>
      <div className='benefits-icon'>
        <Image src='/retain-icon.svg' width={180} height={180} alt='' />
        <p>Experience the metaverse like never before through DAO Galleries.</p>
      </div>
      <div className='benefits-icon'>
        <Image src='/retain-icon.svg' width={180} height={180} alt='' />
        <p>Generate income from idle NFTs</p>
      </div>

    </section>
  );
}

export default Benefits;
