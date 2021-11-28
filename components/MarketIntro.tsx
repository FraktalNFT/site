import Image from "next/image";
import Link from "next/link";

const MarketIntro = () => {
  return (
    <section className="benefits-section marketing">
    <div className="heading-div">
       <h2>Fraktal DAO Token (FRAK)</h2>
 <p>ERC-20: 0xa6a5deea66550772d4a2d77ecbe0187451a4f19e</p>
       <p>
      FRAK is a governance token which oversees the Fraktal Protocol, Ecosystem Funding, and Earns Transaction Fees from the Marketplace when staked in the Fraktal DAO.
       </p>

     </div>
     <div className="spacer">
      <div className="benefits-icon">
        <Image src="/engage-icon.svg" width={180} height={180} alt="" />
        <p>Get Paid to Vote</p>
      </div>
      <div className="benefits-icon">
        <Image src="/monetize-icon.svg" width={180} height={180} alt="" />
      <Link href="https://mirror.xyz/0x77DD52c08F4aAA9dA42ED1bF2e738B8969Ab980F/_QY4QH_jJVPJeC7M2EQS9GVxYCa5ERFImPBjmNX2_Rk" passHref><p>Earn a high APY by providing Liquidity</p></Link>
      </div>
      <div className="benefits-icon">
        <Image src="/retain-icon.svg" width={180} height={180} alt="" />
        <p>Trade with low fees on Arbitrum. aFrak: 0xad21d62155531786bb4850776afb94d2e602d6b3</p>
      </div>
      </div>

    </section>
  );
};

export default MarketIntro;
