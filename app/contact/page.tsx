'use client';
import { AppLayout } from '@/components/layout/app-layout';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function contactPage() {
    return (
        <AppLayout>
            <div className="mt-10 p-4 col-span-full min-h-[20vh]">
                <h1 className='text-4xl font-bold text-center'>Contact Me</h1>
                <div className='grid grid-row-1 my-10'>
                    <Card className='shadow-none hover:shadow-md transition-all duration-300 h-full max-w-full min-w-[50wh]'>
                        <CardContent className='shrink-0'>
                            <div className='grid grid-row my-5'>
                                <div className='flex flex-col-2 p-2 gap-3'>
                                    <p className='text-lg text-pretty'>Email - </p>
                                    <p className='text-lg text-pretty'>neofrankuy21@gmail.com</p>
                                </div>
                                <div className='flex flex-col-2 p-2 gap-3'>
                                    <p className='text-lg text-pretty'>Facebook - </p>
                                    <p className='text-lg text-pretty'>https://web.facebook.com/kratos9700/</p>
                                </div>
                                <div className='flex flex-col-2 p-2 gap-3'>
                                    <p className='text-lg text-pretty'>LinkedIn - </p>
                                    <p className='text-lg text-pretty'>https://www.linkedin.com/in/neo-frank-uy/</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}