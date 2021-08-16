import Link from 'next/link'
import Image from 'next/image'

const Guide = () => {
  return (
    <section className='guide-section'>
      <h2>HOW THE DAO WORKS</h2>
      <div className='guide-icons'>
        <div>
          <Image src='/mint.svg' width={200} height={200} alt='' />
          <p>Tribute NFT to the DAO</p>
        </div>
        <div>
          <Image src='/frak.svg' width={200} height={200} alt='' />
          <p>Receive Shares</p>
        </div>
        <div>
          <Image src='/distribute.svg' width={200} height={200} alt='' />
          <p>Curate NFTs alongside the Community</p>
        </div>
        <div>
          <Image src='/earn.svg' width={200} height={200} alt='' />
          <p>Earn Fees from Galleries, Dapps, and Sales</p>
        </div>
      </div>
    {/*  <Link href='https://fraktal-front-git-web3-integration-sunguru98.vercel.app/'><button>Try It Out</button></Link> */}
    </section>
  );
}

export default Guide;
