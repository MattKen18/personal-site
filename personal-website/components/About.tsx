import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from './SectionHeading'

const aboutText : {
  [key: number] : string
} = {
  0: 'My name is Matthew Carby. I am a Junior Computer Science Major at Shaw University in Raleigh, NC.',
  1: 'I have a passion for web development and cybersecurity',
  2: 'Libero iaculis. Nullam eu odio eget dolor laoreet posuere. Curabitur ullamcorper nibh vel justo.', 
  // 3: 'Bibendum, non interdum metus bibendum. Quisque aliquam mi in lectus suscipit, sed cursus purus feugiat. Libero iaculis. Nullam eu odio eget dolor laoreet posuere. Curabitur ullamcorper nibh vel justo.',
}


function Intro() {
  
  return (
    <div className='relative z-10 flex flex-col gap-4 p-4 bg-slate-400/20 rounded-xl mt-4 backdrop-blur-3xl'>
      {
        Object.keys(aboutText).map((entry, key) => (
          <div 
            key={key}
            className=''
          >
            <p
            className='font-light tracking-widest'>
              {aboutText[key]}
            </p>
          </div>
        ))
      }
    </div>

  )
}

export default Intro