import Link from "next/link";
import Image from "next/image";

const Guide = () => {
  return (
    <section className="guide-section">
      <h2>Projects Using the Fraktal Protocol</h2>
      <div className="guide-icons" id="how">
        <div>
          <Image src="/fraktal.png" width={200} height={200} alt="" />
          <h3>Fraktal Marketplace</h3>
          <p>Mint, Buy and Sell fractional NFTs on Arbitrum and distribute royalty revenue transparently and securely</p>
        </div>
        <div>
          <Image src="/yapeswap.png" width={200} height={200} alt="" />
          <h3>YapeSwap</h3>
            <p>The first NFT AMM on arbitrum creating Liquidity, on-chain pricing, and LP incentives for NFTs</p>
        </div>
        <div>
          <Image src="/daohaus.png" width={200} height={200} alt="" />
          <h3>DaoHaus</h3>
          <p>Coming in 2022, a plug-in to store fractional NFTs in DAO Banks to streamline ownership rights</p>
        </div>

      </div>

    </section>
  );
};

export default Guide;
