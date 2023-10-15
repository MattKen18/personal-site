import ProjectCarousel from '@/components/ProjectCarousel'
import SectionHeading from '@/components/SectionHeading'
import projects from '@/lib/projects'
import React, { useEffect } from 'react'
import projectImages from '@/lib/projectImages'



const page = () => {

  return (
    <div className='p-1 w-full h-fit pt-36 flex flex-col items-center justify-center mb-40'>
      <SectionHeading gradientValue='heading1' align='center' underline>
        <span>My Projects</span>
      </SectionHeading>
      <br />
      <br />
      <div className='flex flex-col space-y-12 w-full items-center justify-center'>
        {
          Object.values(projects).map((project, i) => (
            <ProjectCarousel key={i} count={i+1} images={projectImages[project.name]} projectDetails={project} />
          ))
        }
      </div>

    </div>
  )
}

export default page