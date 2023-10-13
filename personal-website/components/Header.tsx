'use client'

import React, { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link';
import SectionHeading from './SectionHeading';
import useGradient from '@/lib/gradients';
import Bars3Icon from '@heroicons/react/24/solid/esm/Bars3Icon';
import $ from 'jquery'
import { usePathname } from 'next/navigation';


function Header() {  
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerShown, setHeaderShown] = useState<boolean>(true);

  const pathname = usePathname();

  const toggleHeader = () => {
    let displayStyle;
    if (headerRef.current) {
      displayStyle = getComputedStyle(headerRef.current).display;
      if (displayStyle === 'flex') {
        headerRef.current.style.display = 'none';
        return
      }
      headerRef.current.style.display = 'flex';
    }
  }

  const hideHeader = () => {
    if (headerRef.current) {
      headerRef.current.style.display = 'none';
      setHeaderShown(false);
    }
  }

  const showHeader = () => {
    if (headerRef.current) {
      headerRef.current.style.display = 'flex';
      setHeaderShown(true);
    }
  }

  useEffect(() => {
    const handleHeaderResize = () => {
      if (window.innerWidth < 768) { // medium screens
        if (headerShown) hideHeader();
      } else {
        if (!headerShown) showHeader();
      }
    
    }
    window.addEventListener('resize', handleHeaderResize);

    return () => window.removeEventListener('resize', handleHeaderResize);
  }, [headerShown])


  return (
    <header className={`w-screen fixed px-4 md:block md:px-12 h-fit z-50 bg-transparent`}>
      <div className='relative flex w-full flex-col py-4 backdrop-blur-lg items-center md:flex-row font-bold md:text-2xl'>
        <div className='fixed left-2 top-2 h-full'>
          <button 
          className='absolute left-1 top-1 md:hidden p-1'
          onClick={toggleHeader}
          >
            <Bars3Icon className='dark:text-white text-gray-900 h-6 w-6' />
          </button>
        </div>

        <SectionHeading gradientValue={'logo'} align='center'>
          <span className={`text-xl md:text-4xl`}>
            <Link href='/'>
              <span className=''>@</span>
              <span className=''>Matthew</span>
              <span className=''>C</span>
            </Link>
          </span>
        </SectionHeading>

        <div className={`w-full flex flex-1`}
          ref={headerRef}
        >
          <div className='flex flex-1 flex-col md:flex-row items-center justify-center text-dark-text dark:text-light-text'>
            <ul className='flex-1 flex flex-col md:flex-row lg:px-20 xl:px-40 2xl:px-80 text-lg rounded-lg'>
              <li className='flex items-center justify-center flex-1'>
                <Link href='/' className={`site-link ${pathname == "/" && "active-link"}`}>Home</Link>
              </li> 
              <li className='flex items-center justify-center flex-1'>
                <Link href='/projects' className={`site-link ${pathname == "/projects" && "active-link"}`}>Projects</Link>
              </li>          
              <li className='flex items-center justify-center flex-1'>
                <Link href='/resume' className={`site-link ${pathname == "/resume" && "active-link"}`}>Resume</Link>
              </li>
              <li className='flex items-center justify-center flex-1'>
                <Link href='/interests' className={`site-link ${pathname == "/interests" && "active-link"}`}>Interests</Link>
              </li>
            </ul>
            <div className='hidden md:block scale-75 lg:scale-100'>
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div className='fixed top-2 right-2 scale-75 md:hidden'>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header