import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <div className='logo-small'>
        <Link href='/'>
          <a><Image src='/fraktal-logo-small.svg' width={98} height={50} alt='' /></a>
        </Link>
      </div>
      <nav>
        <Link href='https://twitter.com/FraktalNFT'><a><Image src='/Twitter/Original.svg' width={25} height={25} alt='' /></a></Link>
        <Link href='https://www.instagram.com/fraktal.io/'><a><Image src='/Instagram/Original.svg' width={25} height={25} alt='' /></a></Link>
        <Link href='https://discord.gg/Bs56GyMH'><a><Image src='/Discord/Original.svg' width={25} height={25} alt='' /></a></Link>
        <Link href='https://medium.com/@fraktal'><a className='link-text'>BLOG</a></Link>
        <Link href='https://dao.fraktal.io'><a className='link-text'>DAO</a></Link>
        <Link href='https://fraktal-front-git-web3-integration-sunguru98.vercel.app/'><button>Enter Fraktal</button></Link>
      </nav>
    </header>
  );
}

export default Header;
