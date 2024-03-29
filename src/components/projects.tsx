'use client'

import { useRef } from 'react'

import { Heading } from './heading'
import Image from 'next/image'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const Projects = () => {
  const cardsRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = cardsRef?.current?.querySelectorAll('*') as NodeListOf<HTMLDivElement>
    cards?.forEach((card) => {
      const { left, top } = card.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    })
  }

  return (
    <section id='projects' className='container mt-20 md:min-h-screen'>
      <Heading>Projects</Heading>
      <div
        ref={cardsRef}
        onMouseMove={(e) => handleMouseMove(e)}
        id='cards'
        className='grid grid-cols-projects-sm sm:grid-cols-projects items-center justify-center gap-2'
      >
        <div className='card relative h-full flex rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'>
          <div className='relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-[#171717] p-2'>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <div className='relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]'>
                <Image
                  width={1200}
                  height={1200}
                  src='/images/simon.png'
                  alt='pawn image'
                  className='h-full w-full select-none'
                />
              </div>
              <div className='gap-2 py-2 flex flex-col'>
                <h3 className='mb-2 text-xl font-medium sm:text-2xl'>Simon Game</h3>
                <p>
                  Category <span className='text-zinc-400 sm:text-lg'>Memory Game</span>
                </p>
              </div>
            </div>
            <p className='w-[85%] text-[16px] leading-5 sm:text-lg'>
              A game of lights and sounds in which players must repeat random sequences of lights played by the
              computer.
            </p>
          </div>
          <Link
            className={cn(buttonVariants({ size: 'sm' }), 'px-2 py-1 absolute bottom-4 right-4 z-[4]')}
            target='_blank'
            href='https://mowael11.github.io/simon-game'
          >
            Play
          </Link>
          <div className='card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl transition-opacity duration-500 md:block'></div>
        </div>
        <div className='card relative h-full flex rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'>
          <div className='relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-[#171717] p-2'>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <div className='relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]'>
                <Image
                  width={1200}
                  height={1200}
                  src='/images/guitar.png'
                  alt='guitar image'
                  className='h-full w-full select-none'
                />
              </div>
              <div className='gap-2 py-2 flex flex-col'>
                <h3 className='mb-2 text-xl font-medium sm:text-2xl'>Music website</h3>
                <p>
                  Category <span className='text-zinc-400 sm:text-lg'>Informational</span>
                </p>
              </div>
            </div>
            <p className='w-[85%] text-[16px] leading-5 sm:text-lg'>
              Explore the many different styles of music, and learn about their unique qualities.
            </p>
          </div>
          <Link
            className={cn(buttonVariants({ size: 'sm' }), 'px-2 py-1 absolute bottom-4 right-4 z-[4]')}
            target='_blank'
            href='https://mowael11.github.io/music-web'
          >
            Visit
          </Link>
          <div className='card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl transition-opacity duration-500 md:block'></div>
        </div>
        <div className='card relative h-full flex rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'>
          <div className='relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-[#171717] p-2'>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <div className='relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]'>
                <Image
                  width={1200}
                  height={1200}
                  src='/images/dashboard.png'
                  alt='dashboard image'
                  className='h-full w-full select-none'
                />
              </div>
              <div className='gap-2 py-2 flex flex-col'>
                <h3 className='mb-2 text-xl font-medium sm:text-2xl'>Project Hub</h3>
                <p>
                  Category <span className='text-zinc-400 sm:text-lg'>Managment</span>
                </p>
              </div>
            </div>
            <p className='w-[85%] text-[16px] leading-5 sm:text-lg'>
              A Collaborative Platform for Managing Projects and Teams.
            </p>
          </div>
          <Link
            className={cn(buttonVariants({ size: 'sm' }), 'px-2 py-1 absolute bottom-4 right-4 z-[4]')}
            target='_blank'
            href='https://mowael11.github.io/project-hub'
          >
            Visit
          </Link>
          <div className='card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl transition-opacity duration-500 md:block'></div>
        </div>
        <div className='card relative h-full flex rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'>
          <div className='relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-[#171717] p-2'>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <div className='relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]'>
                <Image
                  width={1200}
                  height={1200}
                  src='/images/kasper.png'
                  alt='kasper image'
                  className='h-full w-full select-none'
                />
              </div>
              <div className='gap-2 py-2 flex flex-col'>
                <h3 className='mb-2 text-xl font-medium sm:text-2xl'>Kasper</h3>
                <p>
                  Category <span className='text-zinc-400 sm:text-lg'>Business</span>
                </p>
              </div>
            </div>
            <p className='w-[85%] text-[16px] leading-5 sm:text-lg'>
              Designed to advance a company&apos;s products or services and furnish information about the organization.
            </p>
          </div>
          <Link
            className={cn(buttonVariants({ size: 'sm' }), 'px-2 py-1 absolute bottom-4 right-4 z-[4]')}
            target='_blank'
            href='https://mowael11.github.io/kasper'
          >
            Visit
          </Link>
          <div className='card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl transition-opacity duration-500 md:block'></div>
        </div>
        <div className='card relative h-full flex rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'>
          <div className='relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-[#171717] p-2'>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <div className='relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]'>
                <Image
                  width={1200}
                  height={1200}
                  src='/images/freelance.png'
                  alt='freelance image'
                  className='h-full w-full select-none'
                />
              </div>
              <div className='gap-2 py-2 flex flex-col'>
                <h3 className='mb-2 text-xl font-medium sm:text-2xl'>Freelance Web</h3>
                <p>
                  Category <span className='text-zinc-400 sm:text-lg'>Business</span>
                </p>
              </div>
            </div>
            <p className='w-[85%] text-[16px] leading-5 sm:text-lg'>
              Showcase the skills and expertises of a freelancer.
            </p>
          </div>
          <Link
            className={cn(buttonVariants({ size: 'sm' }), 'px-2 py-1 absolute bottom-4 right-4 z-[4]')}
            target='_blank'
            href='https://mowael11.github.io/freelance-web'
          >
            Visit
          </Link>
          <div className='card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl transition-opacity duration-500 md:block'></div>
        </div>
        <div className='card relative h-full flex rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'>
          <div className='relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-[#171717] p-2'>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <div className='relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]'>
                <Image
                  width={1200}
                  height={1200}
                  src='/images/naval-battles.png'
                  alt='naval battles image'
                  className='h-full w-full select-none'
                />
              </div>
              <div className='gap-2 py-2 flex flex-col'>
                <h3 className='mb-2 text-xl font-medium sm:text-2xl'>Naval Battles</h3>
                <p>
                  Category <span className='text-zinc-400 sm:text-lg'>Startegy</span>
                </p>
              </div>
            </div>
            <p className='w-[85%] text-[16px] leading-5 sm:text-lg'>
              Engage in epic naval battles. Strategically hit squares on a grid to find and sink hidden enemy ships.
            </p>
          </div>
          <Link
            className={cn(buttonVariants({ size: 'sm' }), 'px-2 py-1 absolute bottom-4 right-4 z-[4]')}
            target='_blank'
            href={'https://naval-battles.mowael.com'}
          >
            Play
          </Link>
          <div className='card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl transition-opacity duration-500 md:block'></div>
        </div>
        <div className='card relative h-full flex rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'>
          <div className='relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-[#171717] p-2'>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <div className='relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]'>
                <Image
                  width={1200}
                  height={1200}
                  src='/images/pawn.png'
                  alt='pawn image'
                  className='h-full w-full select-none'
                />
              </div>
              <div className='gap-2 py-2 flex flex-col'>
                <h3 className='mb-2 text-xl font-medium sm:text-2xl'>Chess website</h3>
                <p>
                  Category <span className='text-zinc-400 sm:text-lg'>Informational</span>
                </p>
              </div>
            </div>
            <p className='w-[85%] text-[16px] leading-5 sm:text-lg'>
              Explain the basic rules of chess, including how the pieces move and the objective of the game.
            </p>
          </div>
          <Link
            className={cn(buttonVariants({ size: 'sm' }), 'px-2 py-1 absolute bottom-4 right-4 z-[4]')}
            target='_blank'
            href={'https://mowael11.github.io/chess-web'}
          >
            Visit
          </Link>
          <div className='card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl transition-opacity duration-500 md:block'></div>
        </div>
      </div>
    </section>
  )
}
