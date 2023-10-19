'use client'

import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

function page() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='flex gap-2 items-center justify-center'>
        <span className='animate-pulse font-light text-xl'>
          Work In Progress...
        </span>
        <span>
        <BallTriangle
          height={30}
          width={30}
          radius={5}
          color="#f43f5e"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
        </span>
      </div>
    </div>
  )
}

export default page