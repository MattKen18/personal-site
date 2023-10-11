import About from "@/components/About";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import Welcome from "@/components/Welcome";
import { ArrowDownIcon } from "@heroicons/react/20/solid";


 export default function Home() {
  return (
    <main className=''>
      <div className={`w-full flex flex-col items-center justify-center`}>
        <div className="flex flex-col justify-center  items-center h-screen">
          <SectionHeading gradientValue='red-blue-purple' font='fira'>
            <Welcome />
          </SectionHeading>
          <br />
          <br />
          <ArrowDownIcon className="w-6 animate-pulse" />
        </div>
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <About />
      </div>
      <div className="h-screen flex items-center justify-center">
        <Stats />
      </div>
    </main>
  )
}
