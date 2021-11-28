import Image from "next/image";

const Benefits = () => {
  return (
    <section className="benefits-section">
    <div className="heading-div">
       <h2>Fraktal DAO</h2>
       <p>
        The Fraktal DAO enables stakeholders and artists to have a voice in the governance of the Fraktal ecosystem and share in the profits
       </p>
     </div>
      <div className="benefits-icon">
        <Image src="/engage-icon.svg" width={180} height={180} alt="" />
        <p>Manage the FRAK Token Treasury and have full control over how capital is deployed</p>
      </div>
      <div className="benefits-icon">
        <Image src="/monetize-icon.svg" width={180} height={180} alt="" />
        <p>Earn transaction fees from the marketplace and generate passive income from the NFT ecosystem</p>
      </div>
      <div className="benefits-icon">
        <Image src="/retain-icon.svg" width={180} height={180} alt="" />
        <p>Have ownership and control of the underlying technology which powers the massive Content Economy of tomorrow</p>
      </div>

    </section>
  );
};

export default Benefits;
