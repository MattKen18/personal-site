import ProjectCarousel from '@/components/ProjectCarousel'
import SectionHeading from '@/components/SectionHeading'
import projects from '@/lib/projects'
import React from 'react'
import projectImages from '@/lib/projectImages'

const page = () => {
  return (
    <div className='p-1 w-full h-screen flex flex-col space-y-8 items-center justify-center'>
      <SectionHeading gradientValue='heading1' align='center' underline>
        <span>My Projects</span>
      </SectionHeading>
      <ProjectCarousel images={projectImages['weviews']} projectDetails={projects['weviews']} />

    </div>
  )
}

export default page