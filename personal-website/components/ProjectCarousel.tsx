import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, FolderIcon } from '@heroicons/react/20/solid'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SectionHeading from './SectionHeading'

type props = {
  images?: StaticImageData[]
  projectDetails: Project
}

const ProjectCarousel = ({ images, projectDetails } : props) => {

  return (
    <div className='flex flex-col lg:flex-row gap-4 md:h-[60%] lg:h-[70%] w-[80%] lg:w-[85%] 2xl:w-[65%] text-xs md:text-sm overflow-hidden'>
      <div className='basis-1/5 flex-grow-0 flex flex-col md:flex-row lg:flex-col gap-4 h-fit'>
        <div className='flex flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20'>
          <div className='flex flex-row gap-2 items-center'>
            <SectionHeading gradientValue='heading2'>
              <span className='text-lg font-bold'>
                {projectDetails.title}
              </span>
            </SectionHeading>
            <span className={`${projectDetails.status === 'In Progress' ? 'text-emerald-500' : ''} text-xs font-bold p-1 pl-[0.5rem] border-l-2 border-gray-300 dark:border-light-text`}>
              {projectDetails.status}
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
            {projectDetails.tools.map((tool, key) => (
              <li 
              key={key}
              className='p-1 px-2 m-1 rounded-lg inline-block bg-gray-500 dark:bg-gray-500 text-white font-bold'
              >{tool}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image Slider */}
      <div className='group relative basis-4/5 p-2 flex-grow-1 h-fit rounded-xl bg-slate-400/20 overflow-hidden'>
        <div className='flex w-full h-full rounded-lg gap-8 snap-mandatory snap-x overflow-x-scroll overflow-y-hidden'>
          {
            images &&
            images.map((img, key) => (
              <Image 
                key={key}
                src={img}
                alt={'project image '+ (key+1)}
                className='snap-center'
                unoptimized 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel