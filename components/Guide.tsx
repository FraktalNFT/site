import Image from 'next/image'

const Guide = () => {
  return (
    <section className='guide-section'>
      <h2>HOW FRAKTAL WORKS</h2>
      <div className='guide-icons'>
        <div>
          <Image src='/mint.svg' width={200} height={200} alt='' />
          <p>Mint or import NFTs</p>
        </div>
        <div>
          <Image src='/frak.svg' width={200} height={200} alt='' />
          <p>Frak it!</p>
        </div>
        <div>
          <Image src='/distribute.svg' width={200} height={200} alt='' />
          <p>Distribute Fraktions in the marketplace</p>
        </div>
        <div>
          <Image src='/earn.svg' width={200} height={200} alt='' />
          <p>Trade or earn licensing money</p>
        </div>
      </div>
      <button>Try It Out</button>
    </section>
  );
}

export default Guide;
