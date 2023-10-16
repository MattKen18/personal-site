import { GlobeAmericasIcon } from '@heroicons/react/20/solid'
import { ClockIcon } from '@heroicons/react/24/outline'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import ItemsList from './ItemsList'

type props = {
  company?: string,
  inc: boolean,
  image1?: StaticImageData,
  image2?: StaticImageData,
  position: string,
  location: string,
  duration: string,
  lines: {
    [key: string]: {
      content: string
    }
  }
}

function ExperienceCard({company, inc, image1, image2, position, location, duration, lines} : props) {
  return (
    <div className='flex flex-col gap-1'>
      {/* company and location row */}
      <div className='flex justify-between'>
        <h3  className='pl-2 border-l-2 border-emerald-400/80'>
          <span>
            {
              image1 ?
              <>
                <Image
                  src={image1}
                  alt='google logo'
                  className='w-12 inline-block bg-white p-1 rounded-md'
                />
                <span className='pr-1'>
                {
                  inc &&
                  ', Inc.'
                } 
                </span>
                <span>
                  {
                    image2 &&
                    <Image
                      src={image2}
                      alt='google logo'
                      className='w-12 inline-block bg-white p-1 rounded-md'
                    />
                  }
                </span>
              </>
              :
              company
            }
          </span>
        </h3>
        <p className='text-sm font-bold flex items-center justify-center gap-1'>
          {location}
          <GlobeAmericasIcon className='w-4'/>
        </p>
      </div>
            
      {/* position and duration row */}
      <div className='flex justify-between text-sm font-bold'>
        <p>{position}</p>
        <p className='text-sm font-bold flex items-center justify-center gap-1'>
          {duration}
          <ClockIcon className='w-4'/>
        </p>
      </div>

      {/* details */}
      <div className='mt-4'>
        <ItemsList
          items={lines}
        />
      </div>
      <div className='h-2 w-full my-4 bg-slate-400/20 rounded-full' />
    </div>
  )
}

export default ExperienceCard