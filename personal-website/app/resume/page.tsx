import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import React from "react";
import ExperienceCard from "@/components/ExperienceCard";

import Google from "@/public/resumeImages/google.png";
import Youtube from "@/public/resumeImages/youtube.png";
import Relx from "@/public/resumeImages/relx.png";
import LexisNexis from "@/public/resumeImages/lexisnexis.png";
import Cloud from "@/public/resumeImages/cloud.webp";

import Link from "next/link";
import ItemsList from "@/components/ItemsList";
import {
  ArrowDownCircleIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/20/solid";

function page() {
  const convertToObj = (
    arr: string[]
  ): {
    [key: number]: {
      content: string;
    };
  } => {
    const obj: {
      [key: number]: {
        content: string;
      };
    } = {};

    arr.map((item, i) => {
      obj[i] = {
        content: item,
      };
    });
    return obj;
  };

  const languages: {
    [key: string]: {
      color: string;
    };
  } = {
    Python: {
      color: "bg-cyan-500",
    },
    Java: {
      color: "bg-rose-500",
    },
    JavaScript: {
      color: "bg-teal-500",
    },
    TypeScript: {
      color: "bg-indigo-500",
    },
    "C++": {
      color: "bg-amber-500",
    },
    ReactJs: {
      color: "bg-sky-900",
    },
    Django: {
      color: "bg-rose-400",
    },
    NextJs: {
      color: "bg-slate-700",
    },
    Firebase: {
      color: "bg-rose-900",
    },
    HTML: {
      color: "bg-violet-900",
    },
    CSS: {
      color: "bg-fuchsia-800",
    },
    Kotlin: {
      color: ""
    }
  };

  const experienceStore: {
    [key: string]: string[];
  } = {
    0: [
      `Developed a caching server within Google Cloud FinOps to reduce latency and
      increase availability of heavily accessed data.`,
      `Leveraged the open-source Memcached, using Kotlin to create and manage an
      efficient, state-persisting cache.`,
      `Designed a comprehensive project execution plan and actively participated in the
      design review process to ensure a high-quality outcome.`,
    ],
    1: [
      `Redesigned the purchase flow within YouTube TV Living Room to enhance user experience and increase user
      conversion rate.`,
      `Added server functionality (C++) to return the necessary protocol buffers for a new QR code handoff feature.`,
      `Refactored code to support adaptability, and implemented experiments to gate changes, enabling efficient and
      smooth ramping of the update.`,
      `Conducted rigorous testing and debugging to ensure a bug-free implementation and smooth user experience.`,
    ],
    2: [
      `Embarked on a project aimed at identifying Indicators of Compromise (IOCs) within the organization and
      enacted the necessary procedures to report found vulnerabilities.`,
      `Gained valuable experience using tools such as AWS, the Serverless Framework, TheHive, and Docker.`,
    ],
  };

  const experiences = [];
  for (let i in experienceStore) {
    experiences.push(convertToObj(experienceStore[i]));
  }

  const certificationsArr = [
    "JPMorgan Chase & Co. Software Engineering Virtual Experience.",
  ];

  const certifications = convertToObj(certificationsArr);

  const coursesArr = [
    "Introduction to Programming I",
    "Programming II",
    "Introduction to Cyber Operations",
    "Computer Hardware, Virtualization, & Data Communication",
    "Information Security Ethics, Policy, & Risks",
    "Data Structure & Algorithm Analysis",
    "Web Page Design I & II",
    "Networking I & II",
    "Ethical Hacking",
    "Malware Analysis",
    "Software Engineering",
    "Operating Systems and Assembly"
  ];
  const courses = convertToObj(coursesArr);

  coursesArr.map((item, i) => {
    courses[i] = { content: item };
  });

  const honors = {
    0: {
      content: "Shaw University Honors Program",
      duration: "(2021-2025)",
    },
    1: {
      content: "Shaw University Presidential Scholarship Recipient",
      duration: "(2021-2025)",
    },
    2: {
      content: "Shaw University President's List - GPA of 4.0",
      duration: "(2022-2023)",
    },
  };

  const leadership = {
    0: {
      content: "Shaw University Honda Campus All-Star Challenge (HCASC) Team",
      duration: "(2021-Present)",
    },
    1: {
      content: "Association for Computing Machinery",
      duration: "(2021-Present)",
    },
    2: {
      content:
        "Shaw University Cy(Bear) Security Research Group - IOC Intrusion Detection System",
      duration: "(2022-Present)",
    },
    3: {
      content: "National Society of Black Engineers (NSBE)",
      duration: "(2023)",
    },
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-36 mb-40">
      <SectionHeading gradientValue="heading1" align={"center"} underline>
        <span>My R&eacute;sum&eacute;</span>
      </SectionHeading>
      <Link
        className="mt-4 p-2 px-4 bg-red-500 text-white rounded-full flex items-center justify-center gap-1"
        href={
          "https://drive.google.com/file/d/1sxuBS5bsS3VsZ97mTDMkyyT60Ze4gAuq/view?usp=sharing"
        }
        target="_blank"
      >
        R&eacute;sum&eacute;
        <ArrowUpRightIcon className="w-6" />
      </Link>
      {/* resume */}
      <div className="flex flex-col w-[80%] md:w-[75%] xl:w-full 2xl:w-[70%] mt-12 gap-4">
        {/* education */}
        <div className="w-full xl:w-1/2 relative flex flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20">
          <SectionHeading gradientValue="heading2">
            <span className="text-lg">Education</span>
          </SectionHeading>
          <div className="flex flex-col">
            <h3 className="font-bold pl-2 border-l-2 border-emerald-400/80">
              Bachelor of Science in Cyber Operations
            </h3>
            <ul className="mt-2 pl-3 font-light">
              <li>Shaw University, Raleigh, NC</li>
              <li>Expected graduation date: May 2025</li>
              <li>
                Cumulative GPA: <span className="">4.00</span> / 4.00
              </li>
            </ul>
          </div>
        </div>

        {/* work experience row */}
        <div className="flex w-full flex-col xl:flex-row gap-4">
          <div className="basis-2/3 xl:basis-1/2 h-fit relative flex flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20">
            <SectionHeading gradientValue="heading2">
              <span className="text-lg">Work Experience</span>
            </SectionHeading>
            <div className="flex flex-col">
              <ExperienceCard
                inc={true}
                image1={Google}
                image2={Cloud}
                position="Software Engineering Intern"
                location="Kitchener-Waterloo, CA"
                duration="May 13 - Aug 12 2024"
                lines={experiences[0]}
              />
              <ExperienceCard
                inc={true}
                image1={Google}
                image2={Youtube}
                position="STEP Intern"
                location="San Bruno, CA"
                duration="May 22 - Aug 12 2023"
                lines={experiences[1]}
              />
              <ExperienceCard
                inc={true}
                image1={Relx}
                image2={LexisNexis}
                position="Security Analyst Intern"
                location="Raleigh, NC"
                duration="June 9 - Oct 6 2022"
                lines={experiences[2]}
              />
            </div>
          </div>
          <div className="basis-1/3 xl:basis-1/2 h-fit flex flex-col gap-4">
            {/* Skills and Certs */}
            <div className="relative flex flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20">
              <SectionHeading gradientValue="heading2">
                <span className="text-lg">Skills & Certifications</span>
              </SectionHeading>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col basis-1/2">
                  <h3 className="font-bold pl-2 border-l-2 border-emerald-400/80">
                    Programming Languages & Tools
                  </h3>
                  <ul className="mt-2 pl-2 w-[90%]">
                    {Object.keys(languages).map((language, i) => (
                      <li
                        key={i}
                        className={`bg-slate-900/60 inline-block m-1 rounded-lg p-2 hover:scale-105 duration-200 hover:cursor-default text-white`}
                      >
                        {language}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="basis-1/2">
                  <h3 className="font-bold pl-2 border-l-2 border-emerald-400/80">
                    Certifications
                  </h3>
                  <div className="mt-4">
                    <ItemsList items={certifications} />
                  </div>
                </div>
              </div>
            </div>
            {/* Coursework */}
            <div className="relative flex flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20">
              <SectionHeading gradientValue="heading2">
                <span className="text-lg">Coursework</span>
              </SectionHeading>
              <ItemsList
                items={courses}
                columns="md:columns-2"
                listStyle='before:content-["⟢"]'
              />
            </div>
            {/* Projects and honors row */}
            <div className="basis-1/3 xl:basis-1/2 h-fit flex flex-col md:flex-row gap-4">
              {/* Projects */}
              <div className="relative flex w-fit h-fit flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20">
                <SectionHeading gradientValue="heading2">
                  <span className="text-lg">Projects</span>
                </SectionHeading>
                <div className="pt-2">
                  <Link
                    href="/projects"
                    className="py-2 px-4 block rounded-full bg-red-500 text-white font-bold"
                  >
                    Go to project page &#8592;
                  </Link>
                </div>
              </div>
              {/* Honors */}
              <div className="relative flex flex-1 flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20">
                <SectionHeading gradientValue="heading2">
                  <span className="text-lg">Honors</span>
                </SectionHeading>
                <ItemsList items={honors} />
              </div>
            </div>
            {/* Leadership */}
            <div className="relative flex flex-1 flex-col space-y-2 p-2 md:p-4 rounded-xl bg-slate-400/20">
              <SectionHeading gradientValue="heading2">
                <span className="text-lg">Leadership & Extracurricular</span>
              </SectionHeading>
              <ItemsList items={leadership} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
