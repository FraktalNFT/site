import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <h4><Link href='https://medium.com/@fraktal'><a>BLOG</a></Link> | <Link href='https://github.com/FraktalNFT/contract-audits'><a>AUDITS</a></Link></h4>
      <p>Copyright @ 2021 Fraktal</p>
    </footer>
  );
}

export default Footer;
