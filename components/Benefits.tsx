import Image from 'next/image'

const Benefits = () => {
  return (
    <section className='benefits-section'>
      <div className='heading-div'>
        <h1>Go Further Together</h1>
        <h2>Collect, manage and grow together as a community of top collectors working towards disrupting the creative industry to put power back in the hands of artists and individuals. </h2>

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
