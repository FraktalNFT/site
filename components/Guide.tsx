import Link from "next/link";
import Image from "next/image";

const Guide = () => {
  return (
    <section className="guide-section">
      <h2>How it Works</h2>
      <div className="guide-icons" id="how">
        <div>
          <Image src="/mint.svg" width={200} height={200} alt="" />
          <p>Tribute an NFT to the DAO in exchange for Shares</p>
        </div>
        <div>
          <Image src="/frak.svg" width={200} height={200} alt="" />
          <p>Curate the DAO Collection with the community</p>
        </div>
        <div>
          <Image src="/distribute.svg" width={200} height={200} alt="" />
          <p>Grow the collection using the DAO Bank.</p>
        </div>
        <div>
          <Image src="/earn.svg" width={200} height={200} alt="" />
          <p>Earn ETH from Galleries, Dapps, and Sales</p>
        </div>
      </div>
      <Link href='https://blog.fraktal.io/join-the-fraktal-dao-genesis-f810fb70def3'><button>Join the DAO</button></Link>
    </section>
  );
};

export default Guide;
