import Image from 'next/image'

const About = () => {
  return (
    <section className='about-section'>
      <div className='fraktal-mission'>
        <h2>The Fraktal DAO</h2>
        <p>The Fraktal DAO governs the ecosystem including the marketplace, finances, FRAK token, and NFT vaults. It also enables community driven investment, management, and curation of NFTs across the metaverse and physical galleries. It uses Fractional NFTs to ensure liquidity and redemptions when exiting the DAO.</p>
      </div>
      <div className='fraktal-icons'>
        <div>
          <Image src='/access-icon.svg' width={220} height={220} alt='' />
          <h4>Govern</h4>
          <p className='access-text'>Control the smart contracts and finances of the ecosystem.</p>
        </div>
        <div>
          <Image src='/support-icon.svg' width={220} height={220} alt='' />
          <h4>Collect Fees</h4>
          <p className='support-text'>Fees from the marketplace and integrated dapps flow to the DAO Bank.</p>
        </div>
        <div>
          <Image src='/union.svg' width={220} height={220} alt='' />
          <h4>Manage NFTs</h4>
          <p className='grow-text'>Co-invest, manage, and curate NFTs as a community.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
