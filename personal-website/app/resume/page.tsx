import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import React from 'react'
import ExperienceCard from '@/components/ExperienceCard'

import Google from '@/public/resumeImages/google.png'
import Youtube from '@/public/resumeImages/youtube.png'
import Relx from '@/public/resumeImages/relx.png'
import LexisNexis from '@/public/resumeImages/lexisnexis.png'
import Link from 'next/link'


function page() {
  const languages: {
    [key: string]: {
      color: string
    }
  } = {
    'Python' : {
      color: 'bg-cyan-500'
    },
    'Java' : {
      color: 'bg-rose-500'
    },
    'JavaScript' : {
      color: 'bg-teal-500'
    },
    'TypeScript' : {
      color: 'bg-indigo-500'
    },
    'C++' : {
      color: 'bg-amber-500'
    },
    'ReactJs' : {
      color: 'bg-sky-900'
    },
    'Django' : {
      color: 'bg-rose-400'
    },
    'NextJs' : {
      color: 'bg-slate-700'
    },
    'Firebase' : {
      color: 'bg-rose-900'
    },
    'HTML' : {
      color: 'bg-violet-900'
    },
    'CSS' : {
      color: 'bg-fuchsia-800'
    },
  };

  const certifications = [
    'JPMorgan Chase & Co. Software Engineering Virtual Experience.'
  ]

  const courses = [
    'Introduction to Programming I',
    'Programming II',
    'Introduction to Cyber Operations',
    'Computer Hardware, Virtualization, & Data Communication',
    'Information Security Ethics, Policy, & Risks',
    'Data Structure & Algorithm Analysis',
    'Web Page Design I & II',
    'Networking I',
  ]

  const honors = [
    'Shaw University Honors Program (2021-2025)',
    'Shaw University Presidential Scholarship Recipient (2021-2025)',
    "Shaw University President's List - GPA of 4.0 (2022-2023)"
  ]

  return (
    <div className='w-full min-h-screen flex flex-col items-center pt-36 mb-40'>
      <SectionHeading gradientValue='heading1' align={'center'} underline>
        <span>
          My Resume
        </span>
      </SectionHeading>
      {/* resume */}
      <div className='flex flex-col w-[80%] md:w-[75%] xl:w-[80%] 2xl:w-[70%] mt-12 gap-4'>
        {/* education */}
        <div className='w-full xl:w-1/2 relative flex flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20'>
          <SectionHeading gradientValue='heading2'>
            <span className='text-lg'>Education</span>
          </SectionHeading>
          <div className='flex flex-col'>
            <h3 className='font-bold pl-2 border-l-2 border-emerald-400/80'>Bachelor of Science in Computer Science {`(CyberOperations concentration)`}</h3>
            <ul className='mt-2 pl-3 font-light'>
              <li>Shaw University, Raleigh, NC</li>
              <li>Expected graduation date: May 2025</li>
              <li>Cumulative GPA: <span className=''>4.00</span> / 4.00</li>
            </ul>
          </div>
        </div>

        {/* work experience row */}
        <div className='flex w-full flex-col xl:flex-row gap-4'>
          <div className='basis-2/3 xl:basis-1/2 h-fit relative flex flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20'>
            <SectionHeading gradientValue='heading2'>
              <span className='text-lg'>Work Experience</span>
            </SectionHeading>
            <div className='flex flex-col'>
              <ExperienceCard 
                inc={true}
                image1={Google}
                image2={Youtube}
                position='STEP Intern'
                location='San Bruno, CA'
                duration='May 22 - Aug 12 2023'
                lines={[
                  `Redesigned the purchase flow within YouTube TV Living Room to enhance user experience and increase user
                  conversion rate.`,
                  `Added server functionality (C++) to return the necessary protocol buffers for a new QR code handoff feature.`,
                  `Refactored code to support adaptability, and implemented experiments to gate changes, enabling efficient and
                  smooth ramping of the update.`,
                  `Conducted rigorous testing and debugging to ensure a bug-free implementation and smooth user experience.`,
                ]}
              />
              <ExperienceCard 
                inc={true}
                image1={Relx}
                image2={LexisNexis}
                position='Security Analyst Intern'
                location='Raleigh, NC'
                duration='June 9 - Oct 6 2022'
                lines={[
                  `Embarked on a project aimed at identifying Indicators of Compromise (IOCs) within the organization and
                  enacted the necessary procedures to report found vulnerabilities.`,
                  `Gained valuable experience using tools such as AWS, the Serverless Framework, TheHive, and Docker.`,
                ]}
              />
            </div>
          </div>
          <div className='basis-1/3 xl:basis-1/2 h-fit flex flex-col gap-4'>
            {/* Skills and Certs */}
            <div className='relative flex flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20'>
              <SectionHeading gradientValue='heading2'>
                <span className='text-lg'>Skills & Certifications</span>
              </SectionHeading>
              <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex flex-col basis-1/2'>
                  <h3 className='font-bold pl-2 border-l-2 border-emerald-400/80'>
                    Programming Languages & Tools
                  </h3>
                  <ul className='mt-2 pl-2 w-[90%]'>
                    {
                      Object.keys(languages).map((language, i) => (
                        <li 
                        key={i}
                        className={`bg-slate-900/60 inline-block m-1 rounded-lg p-2 hover:scale-105 duration-200 hover:cursor-default text-white`}>
                          {language}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className='basis-1/2'>
                  <h3 className='font-bold pl-2 border-l-2 border-emerald-400/80'>
                    Certifications
                  </h3>
                  <ul className='mt-2 pl-2'>
                    {
                      certifications.map((cert, i) => (
                        <li
                          key={i}
                          className='font-light p-1'
                        >
                          {cert}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
            {/* Coursework */}
            <div className='relative flex flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20'>
              <SectionHeading gradientValue='heading2'>
                <span className='text-lg'>Coursework</span>
              </SectionHeading>
              <div className='flex flex-col'>
                <ul className='md:columns-2'>
                  {
                    courses.map((course, i) => (
                      <li key={i} className='my-2 font-light before:content-["⟢"] before:pr-1'>{course}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
            {/* Projects */}
            <div className='relative flex w-fit flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20'>
              <SectionHeading gradientValue='heading2'>
                <span className='text-lg'>Projects</span>
              </SectionHeading>
              <div className='pt-2'>
                <Link href='/projects' className='p-2 block rounded-full bg-red-500 text-white font-bold'>Go to project page &#8592;</Link>
              </div>
            </div>
            {/* Honors */}
            <div className='relative flex flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20'>
              <SectionHeading gradientValue='heading2'>
                <span className='text-lg'>Honors</span>
              </SectionHeading>
              <ul>
                {
                  honors.map((honor, i) => (
                    <li 
                    key={i}
                    className='font-light my-1'
                    >
                      {honor}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page