'use client'

import React, { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SkillLevel from './SkillLevel'


function Stats() {

  return (
    <motion.div className='w-full h-[80%] lg:h-full flex flex-col lg:flex-row lg:gap-14 items-center md:justify-center'
      initial={{
        scale: 0,
      }}
      whileInView={{ 
        scale: 1,
      }}
    >
      <div>
        <SectionHeading 
          gradientValue='heading1'
        >
          <p className='break-words w-30'>Skills & Tools</p>
        </SectionHeading>
      </div>
      <div className='flex flex-col space-y-4 mt-4 lg:mt-20 items-center h-[75%] w-full md:w-[80%] xl:w-[70%] 2xl:w-[60%]'>
        <div id="skills-container" className='dark:text-white w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4 lg:gap-8 text-xs xl:text-lg 2xl:text-xl'>
          <div className='relative group overflow-hidden flex flex-col -space-y-2 lg:space-y-2 items-center justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110 row-span-2'>
            <div className='flex items-center justify-center absolute overfow-hidden top-0 left-0 w-0 h-full -z-10 group-hover:w-full bg-yellow-500 group-hover:z-10 transition-all duration-200'>
              
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

            <span className='absolute bottom-2 right-2'>🙂</span>
            </div>
            <span>
              JavaScript
            </span>
            <Image
              src={'/logos/javascript.webp'}
              width={100}
              height={100}
              alt='javascript logo'
            />
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110 '>
            <div className='flex items-center justify-center absolute overfow-hidden bottom-0 left-0 w-full h-0 -z-10 group-hover:h-full bg-blue-800 group-hover:z-10 transition-all duration-200'>
              
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

              <span className='absolute bottom-2 right-2'>👊</span>
            </div>
            <span>
              Python
            </span>
            <Image
              src={'/logos/python.svg.png'}
              width={40}
              height={40}
              alt='python logo'
            />
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110 '>
            <div className='flex items-center justify-center absolute overfow-hidden top-0 left-0 w-full h-0 -z-10 group-hover:h-full bg-orange-600 group-hover:z-10 transition-all duration-200'>
            
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

            <span className='absolute bottom-2 right-2'>🤓</span>
            </div>
            <span>
              Java
            </span>
            <Image
              src={'/logos/java.svg.png'}
              width={40}
              height={40}
              alt='java logo'
            />
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110 sm:col-span-2'>
            <div className='flex items-center justify-center absolute overfow-hidden top-0 right-0 w-0 h-full -z-10 group-hover:w-full bg-sky-400 group-hover:z-10 transition-all duration-200'>
              <div className='relative text-[.4rem] sm:text-[.55rem] lg:text-[.6rem] 2xl:text-[.7rem] leading-tight group-hover:flex hidden text-white w-full h-full justify-center items-center p-4'>
                <SkillLevel level='Proficient' />
                <ul className='w-[70%] list-disc max-h-[70%]'>
                  <li className='w-fit'>2 years</li>
                  <li className=''>
                    My preferred library for doing web development.
                    A breath of fresh air coming from Django. All my most
                    recent websites are built with React.
                  </li>
                </ul>
              </div>
            <span className='absolute bottom-2 right-2'>😘</span>
            </div>
            <span>
              ReactJs | ReactNative
            </span>
            <Image
              src={'/logos/react.svg.png'}
              width={40}
              height={40}
              alt='react logo'
            />
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110'>
            <div className='flex items-center justify-center absolute overfow-hidden bottom-0 left-0 w-full h-0 -z-10 group-hover:h-full bg-gray-800 group-hover:z-10 transition-all duration-200'>
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
            <span className='absolute bottom-2 right-2'>🤯</span>
            </div>
            <span>
              NextJs
            </span>
            <Image
              src={'/logos/nextjs.png'}
              width={40}
              height={40}
              alt='nextjs logo'
            />
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
              <span className='absolute bottom-2 right-2'>🥳</span>
            </div>
            <span>
              TailwindCSS
            </span>
            <Image
              src={'/logos/tailwind.png'}
              width={40}
              height={40}
              alt='tailwindcss logo'
            />
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110'>
            <div className='flex items-center justify-center absolute overfow-hidden bottom-0 left-0 w-full h-0 -z-10 group-hover:h-full bg-amber-500 group-hover:z-10 transition-all duration-200'>
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
            <span className='absolute bottom-2 right-2'>😁</span>
            </div>
            <span>
              Firebase
            </span>
            <Image
              src={'/logos/firebase.png'}
              width={40}
              height={40}
              alt='firebase logo'
            />        
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110 lg:col-span-2'>
            <div className='flex items-center justify-center absolute overfow-hidden bottom-0 left-0 w-0 h-full -z-10 group-hover:w-full bg-indigo-500 group-hover:z-10 transition-all duration-200'>
              <div className='relative text-[.4rem] sm:text-[.55rem] lg:text-[.6rem] 2xl:text-[.7rem] leading-tight group-hover:flex hidden text-white w-full h-full justify-center items-center p-4'>
                <SkillLevel level='Beginner' />
                <ul className='w-[70%] list-disc max-h-[70%]'>
                  <li className='w-fit'>{'< 1 year'}</li>
                  <li className=''>
                    My arch nemesis, the primary language I used during my 
                    time at Google (summer 2023). Loved learning the language
                    but was not a fan of the headaches. Makes me appreciate Python
                    a little more.
                  </li>
                </ul>
              </div>
            <span className='absolute bottom-2 right-2'>🤬</span>
            </div>
            <span>
              C++
            </span>
            <Image
              src={'/logos/c++.png'}
              width={40}
              height={40}
              alt='c++ logo'
            />        
          </div>
          <div className='relative group overflow-hidden flex items-center flex-col lg:flex-row justify-center rounded-lg p-2 font-bold hover:cursor-default hover:scale-110'>
            <div className='flex items-center justify-center absolute overfow-hidden top-0 left-0 w-full h-0 -z-10 group-hover:h-full bg-cyan-500 group-hover:z-10 transition-all duration-200'>
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
              <span className='absolute bottom-2 right-2'>🫡</span>
            </div>
            <span>
              TypeScript
            </span>
            <Image
              src={'/logos/typescript.webp'}
              width={60}
              height={60}
              alt='typescript logo'
            />        
          </div>
        </div>
        <Link href='/projects' className='w-fit hover:opacity-75 rounded-full bg-red-500 text-white px-4 py-2 font-bold'>
          See my Projects
        </Link>  
      </div>

    </motion.div>
  )
}

export default Stats