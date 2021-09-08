import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-section">
      <h4>SHAPE THE FUTURE OF THE CREATIVE INDUSTRY</h4>
      <Link
        href="https://app.daohaus.club/dao/0x1/0x20aadbcef735356fffeb2f40519ac7105c0284b4"
        passHref
      >
        <button>Join the DAO</button>
      </Link>
    </footer>
  );
};

export default Footer;
