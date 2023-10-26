'use client'

import React, { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SkillLevel from './SkillLevel'


function Stats() {

  return (
    <div className='w-full h-[80%] lg:h-full flex flex-col lg:flex-row lg:gap-14 items-center md:justify-center px-8'
    >
      <div>
        <SectionHeading 
          gradientValue='heading1'
          underline
        >
          <p className='break-words w-30'>Tech Stack</p>
        </SectionHeading>
      </div>
      <div className='flex flex-col space-y-4 mt-4 lg:mt-20 items-center h-[75%] w-full md:w-[80%] xl:w-[70%] 2xl:w-[60%]'>
        <div id="skills-container" className='dark:text-white w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4 lg:gap-8 text-xs xl:text-lg 2xl:text-xl'>
          <div className='relative group overflow-hidden flex flex-col -space-y-2 lg:space-y-2 items-center justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110 row-span-2'>
            <div className='flex group items-center justify-center absolute overfow-hidden top-0 left-0 w-0 h-full -z-10 group-hover:w-full bg-sky-800 group-hover:z-10 transition-all duration-200'>
              
            <div className='relative text-[.4rem] sm:text-[.55rem] lg:text-[.6rem] 2xl:text-[.7rem] leading-tight group-hover:flex hidden text-white w-full h-full justify-center items-center p-4'>
                <SkillLevel level='Proficient' />
                <ul className='w-[70%] list-disc max-h-[70%]'>
                  <li className='w-fit'>3 years</li>
                  <li className=''>
                    I&apos;ve used JavaScript in all my personal projects since I started
                    coding - a little over 3 years ago (April 04, 2020).
                  </li>              
                </ul>
            </div>

            <span className='group-hover:block hidden absolute bottom-2 right-2'>🙂</span>
            </div>
            <div className='flex flex-col gap-1 md:gap-2 items-center justify-center'>
              <span>
                JavaScript
              </span>
              <Image
                src={'/logos/javascript.webp'}
                width={10}
                height={10}
                alt='javascript logo'
                unoptimized
                className='w-10 md:w-20'
              />
            </div>
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110 '>
            <div className='flex items-center justify-center absolute overfow-hidden bottom-0 left-0 w-full h-0 -z-10 group-hover:h-full bg-sky-800 group-hover:z-10 transition-all duration-200'>
              
              <div className='relative text-[.4rem] sm:text-[.55rem] lg:text-[.6rem] 2xl:text-[.7rem] leading-tight group-hover:flex hidden text-white w-full h-full justify-center items-center p-4'>
                <SkillLevel level='Proficient' />
                <ul className='w-[70%] list-disc max-h-[70%]'>
                  <li className='w-fit'>3 years</li>
                  <li className=''>
                    My oldest friend. Had my introduction to coding using Python. I&apos;ve used the language
                    extensively since then.
                  </li>
                </ul>
              </div>

              <span className='group-hover:block hidden absolute bottom-2 right-2'>👊</span>
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-2 items-center justify-center'>
              <span>
                Python
              </span>
              <Image
                src={'/logos/python.svg.png'}
                width={10}
                height={10}
                alt='python logo'
                unoptimized
                className='w-6 md:w-8'
              />
            </div>
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110 '>
            <div className='flex items-center justify-center absolute overfow-hidden top-0 left-0 w-full h-0 -z-10 group-hover:h-full bg-sky-800 group-hover:z-10 transition-all duration-200'>
            
            <div className='relative text-[.4rem] sm:text-[.55rem] lg:text-[.6rem] 2xl:text-[.7rem] leading-tight group-hover:flex hidden text-white w-full h-full justify-center items-center p-4'>
              <SkillLevel level='Proficient' />
              <ul className='w-[70%] list-disc max-h-[70%]'>
                <li className='w-fit'>2 years</li>
                <li className=''>
                  My preferred LeetCode language, and also the language I&apos;m learning
                  at university.
                </li>
              </ul>
            </div>

            <span className='group-hover:block hidden absolute bottom-2 right-2'>🤓</span>
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-2 items-center justify-center'>
              <span>
                Java
              </span>
              <Image
                src={'/logos/java.svg.png'}
                width={10}
                height={10}
                unoptimized
                alt='java logo'
                className='w-6 md:w-8'
              />
            </div>
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110 sm:col-span-2'>
            <div className='flex items-center justify-center absolute overfow-hidden top-0 right-0 w-0 h-full -z-10 group-hover:w-full bg-sky-800 group-hover:z-10 transition-all duration-200'>
              <div className='relative text-[.4rem] sm:text-[.55rem] lg:text-[.6rem] 2xl:text-[.7rem] leading-tight group-hover:flex hidden text-white w-full h-full justify-center items-center p-4'>
                <SkillLevel level='Proficient' />
                <ul className='w-[70%] list-disc max-h-[70%]'>
                  <li className='w-fit'>2 years</li>
                  <li className=''>
                    My preferred library for doing web development. All my recent
                    websites are built with React.
                  </li>
                </ul>
              </div>
            <span className='group-hover:block hidden absolute bottom-2 right-2'>😘</span>
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-2 items-center justify-center'>
              <span>
                ReactJs|ReactNative
              </span>
              <Image
                src={'/logos/react.svg.png'}
                width={10}
                height={10}
                alt='react logo'
                unoptimized
                className='w-6 md:w-8'
              />
            </div>
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110'>
            <div className='flex items-center justify-center absolute overfow-hidden bottom-0 left-0 w-full h-0 -z-10 group-hover:h-full bg-sky-800 group-hover:z-10 transition-all duration-200'>
              <div className='relative text-[.4rem] sm:text-[.55rem] lg:text-[.6rem] 2xl:text-[.7rem] leading-tight group-hover:flex hidden text-white w-full h-full justify-center items-center p-4'>
                <SkillLevel level='Intermediate' />
                <ul className='w-[70%] list-disc max-h-[70%]'>
                  <li className='w-fit'>{'< 1 year'}</li>
                  <li className=''>
                    I recently started learning NextJs. <br />
                    Fun fact - this site was built using NextJs!
                  </li>
                </ul>
              </div>
              <span className='group-hover:block hidden absolute bottom-2 right-2'>🤯</span>
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-2 items-center justify-center'>
              <span>
                NextJs
              </span>
                <Image
                  src={'/logos/nextjs.png'}
                  width={10}
                  height={10}
                  alt='nextjs logo'
                  unoptimized
                  className='w-6 md:w-8'
                />
            </div>
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110'>
            <div className='flex items-center justify-center absolute overfow-hidden bottom-0 left-0 w-full h-0 -z-10 group-hover:h-full bg-sky-800 group-hover:z-10 transition-all duration-200'>
              <div className='relative text-[.4rem] sm:text-[.55rem] lg:text-[.6rem] 2xl:text-[.7rem] leading-tight group-hover:flex hidden text-white w-full h-full justify-center items-center p-4'>
                <SkillLevel level='Proficient' />
                <ul className='w-[70%] list-disc max-h-[70%]'>
                  <li className='w-fit'>{'1 year'}</li>
                  <li className=''>
                    No more CSS headaches.
                  </li>
                </ul>
              </div>
              <span className='group-hover:block hidden absolute bottom-2 right-2'>🥳</span>
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-2 items-center justify-center'>
              <span>
                TailwindCSS
              </span>
              <Image
                src={'/logos/tailwind.png'}
                width={10}
                height={10}
                alt='tailwind logo'
                unoptimized
                className='w-6 md:w-8'
              />
            </div>
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110'>
            <div className='flex items-center justify-center absolute overfow-hidden bottom-0 left-0 w-full h-0 -z-10 group-hover:h-full bg-sky-800 group-hover:z-10 transition-all duration-200'>
              <div className='relative text-[.4rem] sm:text-[.55rem] lg:text-[.6rem] 2xl:text-[.7rem] leading-tight group-hover:flex hidden text-white w-full h-full justify-center items-center p-4'>
                <SkillLevel level='Intermediate' />
                <ul className='w-[70%] list-disc max-h-[70%]'>
                  <li className='w-fit'>{'1 year'}</li>
                  <li className=''>
                    Used as the backend in a lot of my projects.
                    Awesome serverless, NoSQL solution. 
                  </li>
                </ul>
              </div>
            <span className='group-hover:block hidden absolute bottom-2 right-2'>😁</span>
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-2 items-center justify-center'>
              <span>
                Firebase
              </span>
              <Image
                src={'/logos/firebase.png'}
                width={10}
                height={10}
                alt='firebase logo'
                unoptimized
                className='w-6 md:w-8'
              />
            </div>       
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110 lg:col-span-2'>
            <div className='flex items-center justify-center absolute overfow-hidden bottom-0 left-0 w-0 h-full -z-10 group-hover:w-full bg-sky-800 group-hover:z-10 transition-all duration-200'>
              <div className='relative text-[.4rem] sm:text-[.55rem] lg:text-[.6rem] 2xl:text-[.7rem] leading-tight group-hover:flex hidden text-white w-full h-full justify-center items-center p-4'>
                <SkillLevel level='Beginner' />
                <ul className='w-[70%] list-disc max-h-[70%]'>
                  <li className='w-fit'>{'< 1 year'}</li>
                  <li className=''>
                    The primary language I used during my 
                    time at Google (summer 2023). Makes me appreciate Python
                    a little more.
                  </li>
                </ul>
              </div>
            <span className='group-hover:block hidden absolute bottom-2 right-2'>🤬</span>
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-2 items-center justify-center'>
              <span>
                C++
              </span>
              <Image
                src={'/logos/c++.png'}
                width={10}
                height={10}
                alt='c plus plus logo'
                unoptimized
                className='w-6 md:w-8'
              />
            </div>      
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110'>
            <div className='flex items-center justify-center absolute overfow-hidden top-0 left-0 w-full h-0 -z-10 group-hover:h-full bg-sky-800 group-hover:z-10 transition-all duration-200'>
            <div className='relative text-[.4rem] sm:text-[.55rem] lg:text-[.6rem] 2xl:text-[.7rem] leading-tight group-hover:flex hidden text-white w-full h-full justify-center items-center p-4'>
                <SkillLevel level='Beginner' />
                <ul className='w-[70%] list-disc max-h-[70%]'>
                  <li className='w-fit'>{'< 1 year'}</li>
                  <li className=''>
                    Figured I&apos;d start learning it as well. I&apos;m using it in this
                    website too.
                  </li>
                </ul>
              </div>
              <span className='group-hover:block hidden absolute bottom-2 right-2'>🫡</span>
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-2 items-center justify-center'>
              <span>
                TypeScript
              </span>
              <Image
                src={'/logos/typescript.webp'}
                width={10}
                height={10}
                alt='typescript logo'
                unoptimized
                className='w-8 md:w-10'
              />
            </div>      
          </div>
        </div>
        <Link href='/projects' className='w-fit hover:opacity-75 rounded-full bg-red-500 text-white px-4 py-2 font-bold'>
          See my Projects
        </Link>  
      </div>

    </div>
  )
}

export default Stats