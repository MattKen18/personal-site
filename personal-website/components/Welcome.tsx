'use client'

import React, { useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import About from '@/components/About'
import Greeting from './Greeting'
import Image from 'next/image'
import Link from 'next/link'

import Contact from './Contact'
import Profile from '@/public/profile.png'
import SectionHeading from './SectionHeading'

import GitHub from '@/public/logos/github.png'
import LinkedIn from '@/public/logos/linkedin.png'
import Gmail from '@/public/logos/gmail.png'
import { PlusIcon } from '@heroicons/react/20/solid'



function Welcome() {
  const contactPanelRef = useRef<HTMLDivElement>(null);
  const [contactPanelShown, setContactPanelShown] = useState<boolean>(false);


  return (
    <div className='relative w-full h-full xl:w-[90%] 2xl:w-[60%] 2xl:h-[80%] overflow-hidden'>
      <div 
        className='flex flex-col md:flex-row h-full w-full px-4 items-center justify-center gap-14
        relative z-10 backdrop-blur-2xl
        '      
        >
        {/* image section */}
        <div className='w-fit flex items-center justify-center'>
          <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: [null, 1.1, 1],
          }}
          transition={{
            duration: 0.3
          }}
          
          className='bg-indigo-500 w-[16rem] h-[16rem] 2xl:w-[20rem] 2xl:h-[20rem] rounded-full overflow-hidden'>
            <Image
              src={Profile}
              alt='profile image'
              className='w-full h-full object-cover'
              priority
              unoptimized
            />
          </motion.div>
        </div>

        {/* intro section */}
        <div className='h-auto w-[80%] md:w-fit 2xl:w-[50%] min-h-[20rem] flex flex-col relative'>
          <SectionHeading gradientValue=''>
            <span className='text-xl md:text-2xl 2xl:text-4xl'>Hey There! I&apos;m</span>
          </SectionHeading>
          <SectionHeading gradientValue='logo'>
            <TypeAnimation
              sequence={[ 
                'Matthew Carby',
              ]}
              // preRenderFirstString
              wrapper="span"
              cursor={false}
              repeat={0}
              style={{ 
                display: 'inline-block',
              }}
              className={`h-fit min-h-18 text-4xl md:text-6xl 2xl:text-7xl 2xl:h-20 font-bold `}
            />
          </SectionHeading>
          <p className='font-bold mt-2 text-gray-500 dark:text-gray-400'>Software Engineer &bull; Web Developer 👨🏽‍💻</p>
          <p className='my-4 md:w-[30rem] text-slate-900 font-bold opacity-70 text-xl md:text-2xl dark:text-white'>
            I am a Junior Computer Science major with a passion for web development and Cybersecurity.
          </p>
          <div className='mt-4 flex gap-4 items-center'>
          <p className='font-bold text-slate-500 dark:text-light-text'>Let&apos;s Connect!</p>
            <motion.button
              whileTap={{
                scale: 1.2,
              }} 
              transition={{
                duration: 0.3
              }}
              onClick={() => setContactPanelShown(state => !state)}
              className={`rounded-full ${contactPanelShown ? 'bg-rose-500 rotate-180' : 'bg-slate-900'}`}
            >
              <PlusIcon className={`w-8 text-white transition-all duration-150 ${contactPanelShown && 'rotate-180'}`} />
            </motion.button>
            <motion.div 
              ref={contactPanelRef}
              className={`gap-4 ${contactPanelShown ? 'flex' : 'hidden'}`}
            >
              <Link
                href={'https://github.com/MattKen18'}
                target='_blank'
                className='w-8 hover:scale-110 duration-100 transition-all rounded-full p-[1px] dark:bg-rose-500/70'
              >
                <Image
                  src={GitHub}
                  alt='github logo'
                />
              </Link>
              <Link
                href={'https://linkedin.com/in/matthewcarby/'}
                target='_blank'
                className='w-8 hover:scale-110 duration-100 transition-all rounded-full p-[1px] dark:bg-rose-500/70'
              >
                <Image
                  src={LinkedIn}
                  alt='LinkedIn logo'
                />
              </Link>
              <Link
                href={'mailto:matthewcarby18@gmail.com'}
                target='_blank'
                className='w-8 hover:scale-110 duration-100 transition-all rounded-full p-[1px] dark:bg-rose-500/70'
              >
                <Image 
                  src={Gmail}
                  alt="email logo"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{
          scale: 0.3,
          rotate: 270
        }}
        animate={{
          scale: 1,
          rotate: 360
        }}
        transition={{
          duration: 2,
        }}
        className={`clipped bg-gradient-to-br from-indigo-500 to-emerald-500 top-0 right-0 absolute w-[50rem] h-[50rem] 2xl:right-40 2xl:w-[60rem] 2xl:h-[60rem]`}>
      </motion.div>
    </div>
  )
}

export default Welcome