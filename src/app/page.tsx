import { Canvas } from '@/components/canvas'
import { Contact } from '@/components/contact'
import { Header } from '@/components/header'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  headers()
  return (
    <>
      <Header />
      <main className='overflow-hidden'>
        <section className='relative bg-[url("/images/main-mobile.webp")] md:bg-[url("/images/main.webp")] bg-cover bg-left h-[calc(100vh-56.8px)] after:absolute after:bottom-0 after:w-full after:shadow-[0px_10px_40px_50px_black] after:shadow-[#121212] after:content-[""]'>
          {/* dots for animation */}
          <span className='hidden md:block opacity-50'>
            <span
              data-dot='1'
              className='absolute top-1/2 z-[-1] origin-bottom animate-first-dot rounded-full bg-[#fdf3da]'
            ></span>
            <span
              data-dot='2'
              className='absolute top-1/2 z-[-1] origin-bottom animate-second-dot rounded-full bg-[#fdf3da]'
            ></span>
            <span
              data-dot='3'
              className='absolute top-1/2 z-[-1] origin-bottom animate-third-dot rounded-full bg-[#fdf3da]'
            ></span>
            <span
              data-dot='4'
              className='absolute top-1/2 z-[-1] origin-bottom animate-fourth-dot rounded-full bg-[#fdf3da]'
            ></span>
          </span>

          <div className='container flex h-full'>
            <div className='flex flex-col gap-1 text-primary sm:translate-x-[90px] justify-center xl:translate-x-0 flex-none w-[325px]'>
              <h2 className='mb-3 w-0 overflow-hidden text-4xl font-bold animate-[text_0.5s_linear_forwards]'>
                Hi<span className='font-mono'>!</span>&nbsp;
              </h2>
              <p className='w-0 overflow-hidden py-1 text-[22px] sm:text-3xl animate-[text_1s_0.5s_forwards]'>
                I&apos;m&nbsp;Mohamed&nbsp;Wael
              </p>
              <p className='w-0 overflow-hidden py-1 text-[22px] sm:text-3xl animate-[text_1s_1.1s_forwards]'>
                a&nbsp;passionate&nbsp;developer
              </p>
              <p className='w-0 overflow-hidden py-1 text-[22px] sm:text-3xl animate-[text_1s_1.8s_forwards]'>
                from&nbsp;Egypt
              </p>
            </div>
            <Canvas />
          </div>
        </section>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className='bg-[#000000]'>
        <div className='container flex items-center justify-between py-4'>
          <p className='sm:text-lg'>Mohamed Wael &copy; {new Date().getFullYear()}</p>
          <Link href='https://github.com/MoWael11' passHref={false} target='_blank' aria-label='My github profile'>
            <Image src='/images/github.svg' width={30} height={30} className='md:size-[40px]' alt='github image' />
          </Link>
        </div>
      </footer>
    </>
  )
}
