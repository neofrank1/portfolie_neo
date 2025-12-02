'use client';
import { AppLayout } from '@/components/layout/app-layout';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDescription,
    TimelineDot,
    TimelineHeader,
    TimelineItem,
    TimelineTime,
    TimelineTitle,
  } from "@/components/ui/timeline";

const techStack = [
    {
        name: 'PHP',
        image: '/tech-stack/php.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'CodeIgniter',
        image: '/tech-stack/code-igniter.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'CakePHP',
        image: '/tech-stack/cake-php.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'Laravel',
        image: '/tech-stack/laravel.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'jQuery',
        image: '/tech-stack/jquery.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'Shadcn UI',
        image: '/tech-stack/shadcnui.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'JavaScript',
        image: '/tech-stack/javascript.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'TypeScript',
        image: '/tech-stack/typescript.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'React',
        image: '/tech-stack/react.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'Next.js',
        image: '/tech-stack/next-js.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'NPM',
        image: '/tech-stack/npm.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'Tailwind',
        image: '/tech-stack/tailwind.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'Bootstrap',
        image: '/tech-stack/bootstrap.svg',
        width: 34,
        height: 34,
    },

    {
        name: 'MySQL',
        image: '/tech-stack/mysql.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'Linux',
        image: '/tech-stack/linux.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'Postman',
        image: '/tech-stack/postman.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'GitHub Copilot',
        image: '/tech-stack/github-copilot-dark.svg',
        width: 34,
        height: 34,
    },
    {
        name: 'GitHub',
        image: '/tech-stack/github-dark.svg',
        width: 34,
        height: 34,
    },
];

const timelineItemsEducationalBackground = [
    {
      id: "elementart",
      dateTime: "2005-2013",
      date: "2005-2013",
      title: "Tipolo Elementary School",
      description: "Elementary",
    },
    {
      id: "high-school",
      dateTime: "2013-2016",
      date: "2013-2016",
      title: "Mandaue City Comprehensive National High School",
      description: "Junior High School",
    },
    {
        id: "senior-high-school",
        dateTime: "2016-2018",
        date: "2016-2018",
        title: "Mandaue City Comprehensive National High School",
        description: "Senior High School",
    },
    {
      id: "college",
      dateTime: "2018-2023",
      date: "2018-2023",
      title: "Cebu Technological University",
      description: "Bachelor of Science in Information Technology",
    },
];

const timelineItemsWorkExperience = [
    {
      id: "sugbodoc",
      dateTime: "2023",
      date: "February 2023 - June 2023",
      title: "Sugbodoc Technologies Inc.",
      description: "Intern Web Developer",
      works: [
        {
            bulletPoint: "Developed and Maintained the website for Sugbodoc Technologies Inc., using CodeIgniter 3 and Bootstrap 4.",
        },
        {
            bulletPoint: "Gathering Medical Codes from different sources (SnoMed, FHIR, ICD-10, ICD-9, etc.) and storing it in the database.",
        },
      ]
    },
    {
      id: "FortyDegreesCelsiusInc",
      dateTime: "Oct 16, 2023 - Present",
      date: "October 16, 2023 - Present",
      title: "Forty Degrees Celsius Inc.",
      description: "Backend Web Developer",
      works: [
        {
            bulletPoint: "Implemented and maintained new features and enhancements for the Native Camp platform, resulting in improved system usability and overall performance.",
        },
        {
            bulletPoint: "Resolved 100+ tickets involving feature development, bug fixes, and performance optimizations from 2023 onward.",
        },
        {
            bulletPoint: "Worked closely with senior developers and solutions architects to maintain, refactor, and optimize the codebase, database structures, and application queries.",
        },
        {
            bulletPoint: "Provided technical support and informal mentorship to team members by sharing effective solutions, quick fixes, and development best practices.",
        },
        {
            bulletPoint: "Collaborated with client-facing teams to address and resolve 100+ technical issues requiring developer-level investigation, improving resolution times and client satisfaction.",
        },
        {
            bulletPoint: "Coordinated regularly with DevOps, Quality Assurance, and Bridge Engineering teams to ensure smooth deployments and reliable integration of code changes into production.",
        },
      ]
    }
];

export default function AboutMe() {
    return (
        <AppLayout>
            <div className="p-4 col-span-full min-h-[20vh]">
                <div className="grid grid-auto-rows grid-cols-4 gap-4">
                    <div className="row-span-1 col-span-2">
                        <div className='grid grid-rows-3 gap-4'>
                            <h1 className='text-7xl font-bold animate-in fade-in duration-1000'> About Me </h1>
                            <div>
                                <p className='text-neutral-500 dark:text-neutral-400 text-pretty text-3xl animate-in fade-in duration-1000 py-2'>I&apos;m a Web Developer that is based in the Philippines.</p>
                            </div>
                            <div>
                                <p className='text-neutral-500 dark:text-neutral-400 text-pretty animate-in fade-in duration-1000'>
                                    Working as a Backend Web Developer right now, Doing Full Stack Projects (Personal Projects) in my free time to improve my skills in both backend and frontend development.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-2 col-span-2 items-center justify-center flex">
                        <Card className='shadow-none hover:shadow-md transition duration-1000 ease-in-out'>
                            <CardContent>
                                <Image src="/image/neo.jpg" width={500} height={300} alt="" className='rounded-lg shadow-lg border-2 border-slate-950' />
                            </CardContent>
                        </Card>
                    </div>
                    <div className='col-span-2 border rounded-lg bg-slate-200 shadow-md mb-2'>
                        <div className='text-center border-b-2 border-slate-950'>
                            <h2 className='text-4xl font-bold animate-in fade-in duration-1000 p-4'>Stack</h2>
                        </div>
                        <div className='animate-in fade-in duration-1000 mt-4'>
                            <ul className='flex flex-wrap gap-4 select-none px-4 py-2'>
                                {techStack.map((tech) => (
                                    <li key={tech.name}>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Image src={tech.image} width={tech.width} height={tech.height} alt={tech.name} />
                                            </TooltipTrigger>
                                            <TooltipContent className='cursor-pointer text-md'>
                                                <p>{tech.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </li>
                                ))}
                            </ul>
                        </div>                        
                    </div>
                </div>
                <div className='grid grid-rows-5 grid-cols-4 gap-4 mt-4'>
                    <div className='row-span-1 col-span-4 grid grid-cols-2 gap-4'>
                        <h2 className='text-4xl font-bold animate-in fade-in duration-1000 py-6 px-2'>Educational Background</h2>
                        <h2 className='text-4xl font-bold animate-in fade-in duration-1000 py-6 px-2'>Work Experience</h2>
                    </div>
                    <div className='row-span-4 col-span-2 p-2'>
                    <Timeline activeIndex={3}>
                        {timelineItemsEducationalBackground.map((item) => (
                            <TimelineItem key={item.id}>
                            <TimelineDot />
                            <TimelineConnector />
                            <TimelineContent>
                                <TimelineHeader>
                                <TimelineTime dateTime={item.dateTime}>{item.date}</TimelineTime>
                                <TimelineTitle>{item.title}</TimelineTitle>
                                </TimelineHeader>
                                <TimelineDescription>{item.description}</TimelineDescription>
                            </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                    </div>
                    <div className='row-span-4 col-span-2 p-2'>
                    <Timeline activeIndex={2}>
                        {timelineItemsWorkExperience.map((item) => (
                            <TimelineItem key={item.id}>
                            <TimelineDot />
                            <TimelineConnector />
                            <TimelineContent>
                                <TimelineHeader>
                                <TimelineTime dateTime={item.dateTime}>{item.date}</TimelineTime>
                                <TimelineTitle>{item.title}</TimelineTitle>
                                </TimelineHeader>
                                <TimelineDescription className='mt-2 font-bold'>{item.description}</TimelineDescription>
                                <TimelineDescription className='mt-2 ml-5'>{item.works.map((work) => (
                                    <li key={work.bulletPoint} className='list-disc mx-1'>{work.bulletPoint}</li>
                                ))}</TimelineDescription>
                            </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}