'use client'

import React, { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import SectionHeading from './SectionHeading'

function Greeting() {
  const typingRef = useRef<HTMLSpanElement>(null);  

  const changeColor = (textColor: string) => {
    if (typingRef.current) typingRef.current.style.color = textColor;
  }



  return (
    <div>
      <SectionHeading gradientValue='heading2'>
        <span>Hey there! I&apos;m Matthew</span>
      </SectionHeading>
      {/* <div className='rounded-md px-2 py-1 bg-slate-400/20 dark:bg-slate-100 dark:text-dark-text w-fit mt-1 opacity-70'> */}
      <div> 
        <TypeAnimation
          sequence={[ 
            '#student',    
            1000,     
            '#software_engineer', 

          ]}
          // preRenderFirstString
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{ 
            display: 'inline-block',
          }}
          ref={typingRef}
          className={`text-sm whitespace-pre-line font-bold after:content-['\_'] after:animate-cursor`}
        />
      </div>

    </div>
  )
}

export default Greeting