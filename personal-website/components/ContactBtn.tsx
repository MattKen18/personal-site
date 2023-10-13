'use client'

import { PlusCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function ContactBtn() {
  const [contactsOpen, setContactsOpen] = useState<boolean>(false);

  const toggleContactsOpen = () => {
    setContactsOpen(state => !state)
  }

  return (
    <div className='p-1 flex flex-col items-center justify-center rounded-full'>
      <div id='contacts-container' className={`flex-col gap-2 md:gap-4 overflow-hidden w-6 md:w-10 h-full ${contactsOpen ? 'flex' : 'hidden'}`}>
        <Link
          href={'https://github.com/MattKen18'}
          target='_blank'
          className='p-[2px] dark:bg-blue-400 rounded-full'
          >
          <Image 
            src='/logos/github.png'
            width={40}
            height={40}
            alt="github logo"
            className=''
          />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/matthewcarby/'}
          target='_blank'
          className='p-[2px] dark:bg-blue-400 rounded-full'

        >
          <Image 
            src='/logos/linkedin.png'
            width={40}
            height={40}
            alt="linkedin logo"
          />
        </Link>
        <Link
          href={'mailto:matthewcarby18@gmail.com'}
          target='_blank'
          className='p-[2px] dark:bg-blue-400 rounded-full'

        >
          <Image 
            src='/logos/gmail.png'
            width={40}
            height={40}
            alt="email logo"

          />
        </Link>
      </div>

      <button 
      onClick={toggleContactsOpen}
      className='mt-2 md:mt-4'>
        <PlusCircleIcon className={`w-6 md:w-10 ${contactsOpen && 'rotate-180 text-slate-800 dark:bg-blue-400 dark:rounded-full'} transition-all duration-200`}/>
      </button>
    </div>
  )
}

export default ContactBtn