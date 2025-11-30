import { AppLayout } from "../components/layout/app-layout";

export default function Projects() {
  return (
    <AppLayout>
      <div className="mt-10 p-4 col-span-full min-h-[20vh]">
        <h1 className='text-4xl font-bold text-center'>Projects Page</h1>
        <p className='text-lg text-pretty text-center mt-4'>This is the projects page content.</p>
      </div>
    </AppLayout>
  );
}