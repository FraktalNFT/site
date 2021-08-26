import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="about-section">
      <div className="fraktal-mission">
        <h2>Unleash the Value of NFTs</h2>
        <p>
          For NFT collectors who are bored with hodling, Fraktal DAO unlocks the
          power of NFTs by enabling community driven investment, curation, and
          monetisation.
        </p>
      </div>
      <div className="about-button">
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default About;
