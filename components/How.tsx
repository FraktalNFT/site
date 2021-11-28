import Link from "next/link";
import Image from "next/image";

const How = () => {
  return (
    <section className="guide-section" id="benefits">

      <div className="benefits-icon">
        <Image src="/engage-icon.svg" width={180} height={180} alt="" />
        <p>Sell a portion of royalty rights directly to fans and investors to get cash fast</p>
      </div>
      <div className="benefits-icon">
        <Image src="/monetize-icon.svg" width={180} height={180} alt="" />
        <p>Receive royalties transparently in real-time to avoid losing any of your hard earned money</p>
      </div>
      <div className="benefits-icon">
        <Image src="/retain-icon.svg" width={180} height={180} alt="" />
        <p>Create highly profitable new revenue streams by collaborating with metaverse galleries</p>
      </div>

      {/*  <Link href='https://fraktal-front-git-web3-integration-sunguru98.vercel.app/'><button>Try It Out</button></Link> */}
    </section>
  );
};

export default How;
