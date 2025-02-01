'use client'

import { useRef } from 'react'
import Image from 'next/image'
import MenuBlack from '@/app/assets/images/menu-black.png'
import { CloseIcon } from './icons'
// import MenuWhite from '@/app/assets/images/menu-white.png'

const SideMenu = () => {
  const sideMenuRef = useRef<HTMLDivElement>(null)
  const openSideMenu = () => {
    sideMenuRef.current!.style.transform = 'translateX(-16rem)'
  }
  const closeSideMenu = () => {
    sideMenuRef.current!.style.transform = 'translateX(16rem)'
  }
  return (
    <>
      <button className="lg:hidden" onClick={openSideMenu}>
        <Image src={MenuBlack} alt="btn-theme" className="size-8" />
      </button>
      <div
        ref={sideMenuRef}
        className=" fixed top-0 bottom-0 -right-64 w-64 z-navbar transition duration-500 bg-rose-50"
      >
        <button className="absolute top-4 right-4" onClick={closeSideMenu}>
          <CloseIcon className="size-10" />
        </button>
        <ul className="h-full flex flex-col items-start justify-center gap-6 text-lg py-3 px-8 ">
          <li>
            <a href="#home" onClick={closeSideMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#home" onClick={closeSideMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#home" onClick={closeSideMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#home" onClick={closeSideMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#home" onClick={closeSideMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideMenu
