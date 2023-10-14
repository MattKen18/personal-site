'use client'

import About from "@/components/About";
import Background from "@/components/Background";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import Welcome from "@/components/Welcome";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";


 export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <main className='p-10'>
      <div className={`
      snap-center w-full flex flex-col items-center justify-center

      `}>
        <div className="flex flex-col justify-center  items-center h-screen">
          <SectionHeading gradientValue='red-blue-purple' font='fira'>
            <Welcome />
          </SectionHeading>
          <br />
          <br />
          <button
            onClick={() => aboutRef.current?.scrollIntoView({behavior: 'smooth'})}
            className="p-2 text-white animate-pulse rounded-full bg-red-500">
            <ArrowDownIcon 
              className="w-8"
            />
          </button>
        </div>
      </div>
      <div 
      ref={aboutRef}
      className="snap-center h-screen flex flex-col items-center justify-center">
        <About />
      </div>
      <div className="snap-center h-screen flex items-center justify-center">
        <Stats />
      </div>
    </main>
  )
}
