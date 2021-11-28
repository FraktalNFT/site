import Link from "next/link";
import Image from "next/image";

const MarketGuide = () => {
  return (
    <section className="guide-section">
      <h2>Fraktal DAO Token (FRAK)</h2>
      <div className="guide-icons" id="how">
        <div>
          <Image src="/mint.svg" width={200} height={200} alt="" />
          <p>Fractionalize any NFT</p>
        </div>
        <div>
          <Image src="/frak.svg" width={200} height={200} alt="" />
          <p>Sell pieces of it on the marketplace</p>
        </div>
        <div>
          <Image src="/distribute.svg" width={200} height={200} alt="" />
          <p>Earn revenue from sales, royalties, and licensing</p>
        </div>
      </div>
      <Link
        href="https://testnet.fraktal.io/"
        passHref
      >
        <button>Join Testnet</button>
      </Link>
    </section>
  );
};

export default MarketGuide;
