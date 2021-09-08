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
          <p>Curate the DAO Collection with the Community</p>
        </div>
        <div>
          <Image src="/distribute.svg" width={200} height={200} alt="" />
          <p>Lease NFT Collections to Metaverse Galleries</p>
        </div>
        <div>
          <Image src="/earn.svg" width={200} height={200} alt="" />
          <p>Earn ETH from Galleries, Dapps, and Sales</p>
        </div>
      </div>
      <Link
        href="https://app.daohaus.club/dao/0x1/0x20aadbcef735356fffeb2f40519ac7105c0284b4"
        passHref
      >
        <button>Join the DAO</button>
      </Link>
    </section>
  );
};

export default Guide;
