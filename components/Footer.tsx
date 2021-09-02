import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-section">
      <h4>SHAPE THE FUTURE OF THE CREATIVE INDUSTRY</h4>
      <Link
        href="https://blog.fraktal.io/join-the-fraktal-dao-genesis-f810fb70def3"
        passHref
      >
        <button>Join the DAO</button>
      </Link>
    </footer>
  );
};

export default Footer;
