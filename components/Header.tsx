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
        <Link href='#'><a><Image src='/Twitter/Original.svg' width={25} height={25} alt='' /></a></Link>
        <Link href='#'><a><Image src='/Instagram/Original.svg' width={25} height={25} alt='' /></a></Link>
        <Link href='#'><a><Image src='/Discord/Original.svg' width={25} height={25} alt='' /></a></Link>
        <Link href='#'><a className='link-text'>BLOG</a></Link>
        <Link href='#'><a className='link-text'>DAO</a></Link>
        <button>Enter Fraktal</button>
      </nav>
    </header>
  );
}

export default Header;
