'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from './SectionHeading'

const aboutText : {
  [key: number] : string
} = {
  0: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque eu dui pelle',
  1: 'Ntesque, non scelerisque tortor semper. Fusce laoreet purus sit amet quam malesuada, at sodales.',
  2: 'Libero iaculis. Nullam eu odio eget dolor laoreet posuere. Curabitur ullamcorper nibh vel justo.', 
  // 3: 'Bibendum, non interdum metus bibendum. Quisque aliquam mi in lectus suscipit, sed cursus purus feugiat. Libero iaculis. Nullam eu odio eget dolor laoreet posuere. Curabitur ullamcorper nibh vel justo.',
}


function Intro() {
  
  return (
    <motion.div
      className='flex flex-col gap-20 items-center justify-center p-4 rounded-xl w-[80%] h-[80%] lg:h-full md:w-[70%] lg:w-[60%]'
      animate={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
      }}
      >
      <div className='relative max-h-[80%] flex flex-col items-center justify-center lg:flex-row md:gap-10 gap-4'>
        <div className='overflow-hidden w-full h-full'>
          <Image
            src='/profile.png'
            width={500}
            height={500}
            alt='profile image'
            unoptimized
            className='object-contain w-full h-full'
            priority
          />
        </div>
        <div className='flex flex-col lg:justify-center relative'>
          <SectionHeading gradientValue='heading1' align='center' >
            <span className=''>About me#</span>
          </SectionHeading>
          <div className='flex flex-col gap-4 pt-4 text-sm'>
            {
              Object.keys(aboutText).map((entry, key) => (
                <div 
                  key={key}
                  className='hover:translate-x-2 dark:hover:text-white dark:hover:border-gray-200 hover:border-black hover:cursor-default transition-all duration-200 rounded-lg border-[1px] dark:border-gray-200/10'
                >
                  <p 
                  className='text-xs 2xl:text-lg max-w-20 p-2 lg:p-4 font-light tracking-widest'>
                    {aboutText[key]}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
        
      </div>
      <hr className='h-[1px] bg-slate-500/20 dark:bg-slate-300/20 border-0 w-full'/>
    </motion.div>
  )
}

export default Intro