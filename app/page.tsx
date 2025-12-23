'use client';
import React from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const homePageContent = "a PHP developer expanding my expertise into TypeScript and modern web technologies. I focus on building clean, efficient, and reliable applications while continuously improving my skills in both backend and frontend development.";

export default function Home() {
  return (
    <AppLayout>
      <div className="mt-2 p-4 col-span-full">
        <div className="relative flex min-h-[50vh] w-full flex-col items-start justify-start overflow-hidden animate-in fade-in duration-500">
          <BackgroundRippleEffect />
          <div className="mt-25 w-full">
            <div className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100 mb-5">
            <EncryptedText text="Hello I&apos;m Neo Frank Uy" encryptedClassName="text-neutral-500" revealedClassName="dark:text-white text-black" revealDelayMs={50}/>
            </div>
          <div className="relative z-10 mx-auto mt-4 max-w-xl min-w-md text-center text-neutral-800 dark:text-neutral-500">
            <TextGenerateEffect words={homePageContent} className='text-justify text-pretty' duration={1}/>
          </div>
          </div>
        </div>
        <h1 className='text-4xl font-bold text-center mt-5'>Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
          <Card className='shadow-none hover:shadow-md transition-all duration-300 h-full w-full flex flex-col'>
            <CardContent className='shrink-0'>
              <Image src="/projects/movie-house.png" alt="" width={500} height={300} className='shadow-lg border-2 border-slate-950 w-full h-48 object-cover'/>
            </CardContent>
            <CardHeader className='shrink-0'>
              <CardTitle className='text-center font-extrabold text-2xl'>Movie House</CardTitle>
            </CardHeader>
            <CardContent className='grow'>
              <p className='text-justify text-pretty'>
                This is a simple movie search engine built with Next.js and Tailwind CSS. 
                You can search for a movie by title and get the details of the movie. 
                You can also get the details of a movie by its ID.
              </p>
              <ul className='flex flex-wrap gap-2 mt-2'>
                <li><Badge variant="outline" className='mt-2'>NextJS</Badge></li>
                <li><Badge variant="outline" className='mt-2'>Tailwind</Badge></li>
                <li><Badge variant="outline" className='mt-2'>TypeScript</Badge></li>
                <li><Badge variant="outline" className='mt-2'>OMDB API</Badge></li>
              </ul>
            </CardContent>
            <CardFooter className='flex justify-between gap-2'>
              <Link href="https://github.com/neofrank1/movie_house" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className='mt-2 w-full bg-blue-500 text-white hover:bg-blue-600'>Get Source Code</Button>
              </Link>
              <Link href="https://movie-house-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className='mt-2 w-full bg-green-500 text-white hover:bg-green-600'>Live Demo</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className='shadow-none hover:shadow-md transition-all duration-300 h-full flex flex-col'>
            <CardContent className='shrink-0'>
              <Image src="/projects/nativecamp.png" alt="" width={500} height={300} className='shadow-lg border-2 border-slate-950 w-full h-48 object-cover'/>
            </CardContent>
            <CardHeader className='shrink-0'>
              <CardTitle className='text-center font-extrabold text-2xl'>Native Camp</CardTitle>
            </CardHeader>
            <CardContent className='grow'>
              <p className='text-justify text-pretty'>
              Contributed as part of the Feature Team by implementing and deploying new functionalities. 
              Currently assigned to the Corporate Team, tasked to focus on identifying and resolving defects to improve system stability and user experience for the corporate clients.
              </p>
              <ul className='flex flex-wrap gap-2 mt-2'>
                <li><Badge variant="outline" className='mt-2'>CakePHP</Badge></li>
                <li><Badge variant="outline" className='mt-2'>CSS</Badge></li>
                <li><Badge variant="outline" className='mt-2'>JQuery</Badge></li>
                <li><Badge variant="outline" className='mt-2'>JavaScript</Badge></li>
                <li><Badge variant="outline" className='mt-2'>MySQL</Badge></li>
                <li><Badge variant="outline" className='mt-2'>PHP</Badge></li>
              </ul>
            </CardContent>
            <CardFooter className='flex justify-between gap-2'>
              <Button variant="outline" className='mt-2 bg-slate-500 text-white hover:bg-slate-600' disabled>Get Source Code</Button>
              <Link href="https://nativecamp.net/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className='mt-2 w-full bg-green-500 text-white hover:bg-green-600'>Live Demo</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className='shadow-none hover:shadow-md transition-all duration-300 h-full flex flex-col'>
            <CardContent className='shrink-0'>
              <Image src="/projects/expense-report.png" alt="" width={500} height={300} className='shadow-lg border-2 border-slate-950 w-full h-48 object-cover'/>
            </CardContent>
            <CardHeader className='shrink-0'>
              <CardTitle className='text-center font-extrabold text-2xl'>Expense Report</CardTitle>
            </CardHeader>
            <CardContent className='grow'>
              <p className='text-justify text-pretty'>
              Expense report system built with NextJS and Tailwind. It has and Auth System to prevent unauthorized access.
              You can add, edit, and delete expenses. 
              </p>
              <ul className='flex flex-wrap gap-2 mt-2'>
                <li><Badge variant="outline" className='mt-2'>NextJS</Badge></li>
                <li><Badge variant="outline" className='mt-2'>Shadcn UI</Badge></li>
                <li><Badge variant="outline" className='mt-2'>TypeScript</Badge></li>
                <li><Badge variant="outline" className='mt-2'>Tailwind</Badge></li>
                <li><Badge variant="outline" className='mt-2'>Neon</Badge></li>
                <li><Badge variant="outline" className='mt-2'>React</Badge></li>
                <li><Badge variant="outline" className='mt-2'>Clerk</Badge></li>
              </ul>
            </CardContent>
            <CardFooter className='flex justify-between gap-2'>
            <Link href="https://github.com/neofrank1/expense_report" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className='mt-2 w-full bg-blue-500 text-white hover:bg-blue-600'>Get Source Code</Button>
              </Link>
              <Link href="https://expense-report.xyz/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className='mt-2 w-full bg-green-500 text-white hover:bg-green-600'>Live Demo</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
