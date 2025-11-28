import React from 'react';
import { AppLayout } from './components/layout/app-layout';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <AppLayout>
      <div className="mt-10 p-4 col-span-full min-h-[20vh]">
        <div className='grid grid-cols-3 grid-rows gap-4'>
          <div className='col-span-2 row-span-8'>
            <h1 className='text-4xl font-bold'>Welcome to My Portfolio</h1>
            <p className='text-lg text-pretty'>This is the home page content.</p>
          </div>
          <div className='col-span-1'>
            <Image src="/neo_logo_clean.svg" alt="Neo logo" width={1536} height={1024} />
          </div>
        </div>
        <h1 className='text-4xl font-bold text-center'>Projects</h1>
        <div className='grid grid-cols-3 gap-4 mt-5'>
          <Card className='shadow-none hover:shadow-md transition-all duration-300'>
            <CardHeader>
              <CardTitle>Project 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is the first project</p>
            </CardContent>
          </Card>
          <Card className='shadow-none hover:shadow-md transition-all duration-300'>
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is the second project</p>
            </CardContent>
          </Card>
          <Card className='shadow-none hover:shadow-md transition-all duration-300'>
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
