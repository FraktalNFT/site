import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section">
      <h1>FRAKTAL</h1>
      <span className="logo-large">
        <Image src="/fraktal-logo-large.svg" width={800} height={400} alt="" />
      </span>
      <div>
        <h2>Community Curated</h2>
        <Image src="/single-leaf.svg" width={55} height={55} alt="" />
        <h2>NFTs</h2>
      </div>

      <div>
        <h2>Powered by a DAO.</h2>
      </div>

      <div className="join">
        <div>
          <Link href="https://twitter.com/FraktalNFT">
            <a>
              <Image
                src="/Twitter/Original.svg"
                width={37}
                height={37}
                alt=""
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/fraktal.io/">
            <a>
              <Image
                src="/Instagram/Original.svg"
                width={37}
                height={37}
                alt=""
              />
            </a>
          </Link>
          <Link href="https://discord.gg/2378rAGuAX">
            <a>
              <Image
                src="/Discord/Original.svg"
                width={37}
                height={37}
                alt=""
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
