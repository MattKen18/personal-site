'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"

function Welcome() {
  return (
    <div className='p-4 rounded-lg dark:text-light-text text-dark-text'>
      <motion.div
        initial={{ 
          scale: 0,
        }}
        whileInView={{ 
          scale: 1,
        }}
        className='w-full h-full'
      >
        <TypeAnimation
          sequence={[
            'Hey there!',
            500,
            'Hey there! I\'m Matthew',        
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{ 
            display: 'inline-block',
            fontSize: '',
          }}
          className='text-3xl after:text-3xl after:content-["\_"] after:text-black/60 dark:after:text-light-text after:animate-cursor'
        />
      </motion.div>
    </div>
  )
}

export default Welcome