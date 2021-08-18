import Link from 'next/link'
import Image from 'next/image'

const Why = () => {
  return (
    <section className='guide-section'>
      <h2>Why Fraktal</h2>
      <h3>Collect, Manage and Grow together as a community of like minded individuals whose mission is to spread NFT culture throughout the metaverse.</h3>
      <br></br><br></br><br></br><br></br>

      <div className='guide-icons'>
        <div>
          <Image src='/mint.svg' width={200} height={200} alt='' />
          <h3>Diverse</h3>
          <p>The easiest and most secure way to diversify NFT holdings.</p>
        </div>
        <div>
          <Image src='/frak.svg' width={200} height={200} alt='' />
          <h3>Liquid</h3>
          <p>Provide Liquidity to NFT pairs directly from the DAO.</p>
        </div>
        <div>
          <Image src='/distribute.svg' width={200} height={200} alt='' />
          <h3>Income Generating</h3>
          <p>Create revenue streams directly from metaverse galleries.</p>
        </div>

      </div>
    {/*  <Link href='https://fraktal-front-git-web3-integration-sunguru98.vercel.app/'><button>Try It Out</button></Link> */}
    </section>
  );
}

export default Why;
