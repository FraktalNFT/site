import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="about-section">
      <div className="fraktal-mission">
        <h2>Fractional NFTs enable artists to take full control of their creations.</h2>

      </div>
      <div className="about-button">
        <Link href="#benefits" passHref>
          <button>Learn How</button>
        </Link>
      </div>
    </section>
  );
};

export default About;
