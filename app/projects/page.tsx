import { AppLayout } from "../../components/layout/app-layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Projects() {
  return (
    <AppLayout>
      <div className="mt-10 p-4 col-span-full min-h-[20vh]">
        <h1 className='text-4xl font-bold text-center'>Projects List</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
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