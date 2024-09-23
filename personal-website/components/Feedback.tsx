'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';
import { addLike } from '../firebase';

function Feedback() {
  return (
    <div className='flex space-x-2'>
      <button className='hover:text-red-500'>
        Give me some feedback!
      </button>
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        type: 'spring',
        damping: 5,
      }}
      whileHover={{
        scale:1.2,
      }}
      whileTap={{
        scale:0.75
      }}

      className=''
    >
      <HeartIcon 
        onClick={addLike}
      className='w-8 hover:text-rose-500 hover:cursor-pointer' />
    </motion.div>
    </div>
  )
}

export default Feedback