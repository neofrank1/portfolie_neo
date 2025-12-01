'use client';
import React from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { EncryptedText } from "@/components/ui/encrypted-text";
import Link from 'next/link';

const homePageContent = "a PHP developer expanding my expertise into TypeScript and modern web technologies. I focus on building clean, efficient, and reliable applications while continuously improving my skills in both backend and frontend development.";

export default function Home() {
  return (
    <AppLayout>
      <div className="mt-2 p-4 col-span-full">
        <div className="relative flex min-h-[50vh] w-full flex-col items-start justify-start overflow-hidden animate-in fade-in duration-500">
          <BackgroundRippleEffect />
          <div className="mt-25 w-full">
            <div className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100 mb-5">
            <EncryptedText text="Hello I'm Neo Frank Uy" encryptedClassName="text-neutral-500" revealedClassName="dark:text-white text-black" revealDelayMs={50}/>
            </div>
          <div className="relative z-10 mx-auto mt-4 max-w-xl min-w-md text-center text-neutral-800 dark:text-neutral-500">
            <TextGenerateEffect words={homePageContent} className='text-justify text-pretty' duration={1}/>
          </div>
          </div>
        </div>
        <h1 className='text-4xl font-bold text-center mt-20'>Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
          <Link href="https://movie-house-two.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Card className='shadow-none hover:shadow-md transition-all duration-300'>
              <CardContent>
                <Image src="/projects/movie-house.png" alt="" width={500} height={500} className='shadow-lg border-2 border-slate-950'/>
              </CardContent>
              <CardHeader>
                <CardTitle className='text-center font-extrabold text-2xl'>Movie House</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-justify text-pretty'>
                  This is a simple movie search engine built with Next.js and Tailwind CSS. 
                  You can search for a movie by title and get the details of the movie. 
                  You can also get the details of a movie by its ID.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Card className='shadow-none hover:shadow-md transition-all duration-300'>
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is the second project</p>
            </CardContent>
          </Card>
          <Card className='shadow-none hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1'>
            <CardHeader>
              <CardTitle>Project 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is the third project</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
