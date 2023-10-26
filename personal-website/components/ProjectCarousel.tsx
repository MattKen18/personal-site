'use client'

import { FolderIcon } from '@heroicons/react/20/solid'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import SectionHeading from './SectionHeading'

type props = {
  count: number
  images?: StaticImageData[]
  projectDetails: Project
}

const ProjectCarousel = ({ count, images, projectDetails } : props) => {
  const carousel = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setTimeout(() => {
      if (carousel.current != null) {
        carousel.current.scrollLeft = 0;
      }  
    }, 1000);

  }, [images])

  return (
    <>
      <div className='flex flex-col lg:flex-row gap-4 md:h-[60%] lg:h-[70%] w-[80%] lg:w-[85%] 2xl:w-[65%] text-xs md:text-sm'>
        <div className='basis-1/5 flex-grow-0 flex flex-col md:flex-row lg:flex-col gap-4 h-fit'>
          <div className='relative flex flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20'>
            <span className='absolute -top-2 -left-2 py-1 px-2.5 font-bold text-white bg-yellow-500 rounded-full block'>
              {count}
            </span>
            <div className='flex flex-row gap-2 items-center'>
              <SectionHeading gradientValue='heading2'>
                <span className='text-lg font-bold'>
                  {projectDetails.title}
                </span>
              </SectionHeading>
              <span className={`${projectDetails.status === 'In Progress' ? 'text-emerald-500' : ''} text-xs font-bold p-1 px-[0.5rem] border-l-2 border-r-2 border-gray-300 dark:border-light-text`}>
                {projectDetails.status}
              </span>
              <span className='font-bold text-xs text-dark-text/70 dark:text-light-text'>
                {projectDetails.year}
              </span>
            </div>
            <p className='font-light'>{projectDetails.description}</p>
            <Link 
              className='flex space-x-2 hover:text-blue-500 duration-100 text-xs font-bold opacity-60 hover:opacity-100 items-start'
              href={projectDetails.link ? projectDetails.link : ""}
              target='_blank'
              >
              <FolderIcon className='w-4' />
              <p className='w-full break-words pr-2'>
                {projectDetails?.link}
              </p>
            </Link>
          </div>

          <div className='flex flex-col space-y-2 p-2 md:p-4 h-fit md:h-full rounded-xl bg-slate-400/20'>
            <p className='text-sm font-bold text-blue-500'>Tools</p>
            <ul className=''>
              {projectDetails.tools.map((tool, i) => (
                <li 
                key={i}
                className='p-1 px-2 m-1 rounded-lg inline-block bg-gray-500 dark:bg-gray-500 text-white font-bold'
                >{tool}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Slider */}
        <div className='carousel group relative basis-4/5 p-2 flex-grow-1 h-fit rounded-xl bg-slate-400/20 overflow-hidden'>
          <div ref={carousel} className='flex w-full h-full rounded-lg gap-8 snap-mandatory snap-x overflow-x-scroll overflow-y-hidden'>
            {
              images &&
              images.map((img, i) => (
                <Image 
                  key={i}
                  src={img}
                  alt={projectDetails.title + ' project image '+ (i+1)}
                  className={`snap-center ${projectDetails.name + '-image-'+i}`}
                  unoptimized 
                  priority
                />
              ))
            }
          </div>
        </div>
      </div>
      <div className='w-full h-[2px] bg-slate-500/20 my-4' />
    </>
  )
}

export default ProjectCarousel