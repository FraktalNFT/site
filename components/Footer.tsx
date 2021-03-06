import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-section">
      <h4>HELP BUILD A NEW ECONOMY</h4>
      <Link
        href="https://app.daohaus.club/dao/0xa4b1/0x751eda5aa0a1c026f51942e266ed82795428ae34"
        passHref
      >
        <button>Join the Fraktal DAO</button>
      </Link>
    </footer>
  );
};

export default Footer;
