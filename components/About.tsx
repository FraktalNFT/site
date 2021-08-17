import Image from 'next/image'

const About = () => {
  return (
    <section className='about-section'>
      <div className='fraktal-mission'>

        <h2>Community Driven NFTs</h2>
        <p>
Don't let your NFTs collect digital dust in a wallet. Engage in a community of like minded collectors and artists whose mission is to spread
NFT culture throughout the metaverse. </p>

      <br></br>
      <br></br>
        <br></br>  <br></br>
          <br></br>
            <br></br>



        <h2>The Fraktal DAO</h2>
          <p>The Fraktal DAO enables community driven investment, management, and curation of NFTs across the metaverse. </p>

  </div>
      <div className='fraktal-icons'>
        <div>
          <Image src='/access-icon.svg' width={220} height={220} alt='' />
          <h4>Invest alongside the top collectors in the industry.</h4>
          <p className='access-text'></p>
        </div>
        <div>
          <Image src='/support-icon.svg' width={220} height={220} alt='' />
          <h4>Curate and Manage high value NFTs with an amazing community</h4>
          <p className='support-text'></p>
        </div>
        <div>
          <Image src='/union.svg' width={220} height={220} alt='' />
          <h4>Monetise NFTs and generate income from a wide variety of activities.</h4>
          <p className='grow-text'></p>
        </div>
      </div>


    </section>
  );
}

export default About;
