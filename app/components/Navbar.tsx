// import DevImage from '@/app/assets/images/developer.png'
import Link from 'next/link'
import SideMenu from './SideMenu'
import { ConnectIcon, MoonIcon } from './icons'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-navbar flex items-center justify-between w-full px-5 py-4 lg:px-8 xl:px-[8%]">
      <Link href="/" className="text-4xl">
        Deepak
        {/* <Image src={DevImage} alt="nav-icon" className="size-8" /> */}
      </Link>
      <ul className="flex items-center gap-6 text-lg bg-gray-100 py-3 px-12 rounded-full max-lg:hidden">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#home">About Me</a>
        </li>
        <li>
          <a href="#home">Services</a>
        </li>
        <li>
          <a href="#home">My Work</a>
        </li>
        <li>
          <a href="#home">Contact Me</a>
        </li>
      </ul>
      <div className="flex items-center gap-6 lg:gap-8">
        <button>
          <MoonIcon className="size-8" />
          {/* <Image src={MoonSvg} alt="btn-theme" className="size-8" /> */}
        </button>
        <a href="#contact" className="btn-outlined-light">
          Connect
          <ConnectIcon className="size-3" />
          {/* <Image src={ConnectSvg} alt="nav-icon" className="size-3" /> */}
        </a>
        <SideMenu />
      </div>
    </nav>
  )
}

export default Navbar

// 2:15 dark mode
// 2:50 animation
