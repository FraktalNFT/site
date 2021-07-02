import Image from 'next/image'

const Benefits = () => {
  return (
    <section className='benefits-section'>
      <div className='heading-div'>
        <h2>A WIN-WIN FOR CREATORS AND COLLECTORS</h2>
      </div>
      <div className='benefits-icon'>
        <Image src='/engage-icon.svg' width={180} height={180} alt='' />
        <p>Engage audiences on a whole new level</p>
      </div>
      <div className='benefits-icon'>
        <Image src='/monetize-icon.svg' width={180} height={180} alt='' />
        <p>Monetize your content in infinite ways</p>
      </div>
      <div className='benefits-icon'>
        <Image src='/retain-icon.svg' width={180} height={180} alt='' />
        <p>Retain control and ownership</p>
      </div>
    </section>
  );
}

export default Benefits;
