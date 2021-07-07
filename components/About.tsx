import Image from 'next/image'

const About = () => {
  return (
    <section className='about-section'>
      <div className='fraktal-mission'>
        <h2>FRAKTAL IS RESHAPING ART.</h2>
        <p>Fraktal&#39;s mission is to make crypto art investment accessible to everyone. Fraktal allows users to distribute Fraktions–pieces of NFTs–to an unlimited number of users.</p>
      </div>
      <div className='fraktal-icons'>
        <div>
          <Image src='/access-icon.svg' width={220} height={220} alt='' />
          <h4>Access for all</h4>
          <p className='access-text'>Fraktions grant access to the NFT without the often unaffordable price tag.</p>
        </div>
        <div>
          <Image src='/support-icon.svg' width={220} height={220} alt='' />
          <h4>Support artists, not gatekeepers</h4>
          <p className='support-text'>What you pay for a Fraktion goes directly to the creator, not an auction house.</p>
        </div>
        <div>
          <Image src='/union.svg' width={220} height={220} alt='' />
          <h4>Grow value</h4>
          <p className='grow-text'>As your favorite NFTs mature in value, your collection of Fraktions does too.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
