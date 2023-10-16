import { GlobeAmericasIcon } from '@heroicons/react/20/solid'
import { ClockIcon } from '@heroicons/react/24/outline'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type props = {
  company?: string,
  inc: boolean,
  image1?: StaticImageData,
  image2?: StaticImageData,
  position: string,
  location: string,
  duration: string,
  lines: string[]
}

function ExperienceCard({company, inc, image1, image2, position, location, duration, lines} : props) {
  return (
    <div className='flex flex-col gap-1 hover:scale-[1.03] lg:hover:scale-105 duration-200'>
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
      <ul className='mt-4 flex flex-col gap-4 p-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        {
          lines.map((line, i) => (
            <li key={i} className='font-light'>
              {line}
            </li>
          ))
        }
      </ul>
      <div className='h-2 w-full my-4 bg-slate-400/20 rounded-full' />
    </div>
  )
}

export default ExperienceCard