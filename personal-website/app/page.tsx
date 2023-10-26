
import About from "@/components/About";
import Background from "@/components/Background";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import Welcome from "@/components/Welcome";
import { ArrowDownIcon } from "@heroicons/react/20/solid";


 export default function Home() {

  return (
    <main className=''>
      <div className={`
      w-full flex flex-col items-center justify-center
      `}>
        <div className="snap-center relative flex flex-col justify-center items-center w-screen h-screen">
          <Welcome />
        </div>
      </div>
      <div className="snap-center h-screen flex items-center justify-center">
        <Stats />
      </div>
    </main>
  )
}
