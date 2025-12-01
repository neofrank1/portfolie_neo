'use client';
import { AppLayout } from '@/components/layout/app-layout';
import Image from 'next/image';

export default function AboutMe() {
    return (
        <AppLayout>
            <div className="mt-10 p-4 col-span-full min-h-[20vh]">
                <div className="grid grid-rows-4 grid-cols-4 gap-4">
                    <div className="row-span-3 col-span-2">
                        <div className='grid grid-rows-3 gap-4'>
                            <h1 className='text-7xl font-bold'> About Me </h1>
                            <div>
                                <p className='text-neutral-500 dark:text-neutral-400 text-pretty text-3xl'>Web Developer that is based in the Philippines.</p>
                            </div>
                            <div>
                                <p className='text-neutral-500 dark:text-neutral-400 text-pretty'>I'm a Full Stack Developer, specializing in building clean, efficient, and reliable applications while continuously improving my skills in both backend and frontend development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-3 col-span-2 items-center justify-center flex">
                       <Image src="/image/neo.jpg" width={300} height={150} alt="" />
                    </div>
                    <div className='row-span-2 col-span-4'>
                        Hello
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}