'use client'

import Image from 'next/image'
import { Heading } from './heading'
import { useEffect, useRef } from 'react'
import { ActionToolTip } from './action-tooltip'
import Link from 'next/link'

export const Skills = () => {
  const paragraphRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLUListElement>(null)
  const skillsIconRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const paragraph = paragraphRef.current
    const skills = skillsRef.current
    const skillsIcon = skillsIconRef.current

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-x-0', 'opacity-100')
        }
      })
    })

    if (paragraph && skills && skillsIcon) {
      observer.observe(paragraph)
      skills.childNodes.forEach((skill) => {
        observer.observe(skill as HTMLElement)
      })
      skillsIcon.querySelectorAll('li').forEach((skillIcon) => {
        observer.observe(skillIcon)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id='skills' className='container mt-20 md:min-h-screen relative'>
      <Heading>Skills</Heading>
      <div className='absolute top-[140px] z-[-1] right-[100px] hidden lg:block select-none'>
        <Image width={140} height={140} src='/images/skills.png' alt='skills icon' />
      </div>
      <div className='mb-10 leading-8'>
        <p ref={paragraphRef} className='mb-6 text-xl transition duration-500 -translate-x-full opacity-0'>
          I have expertise in a range of programming languages and technologies, including:
        </p>
        <ul ref={skillsRef} className='flex list-disc flex-col gap-4 text-lg overflow-hidden pl-8'>
          <li className='-translate-x-full opacity-0 transition duration-1000'>
            JavaScript, with a focus on Node.js and Express.js for server-side development
          </li>
          <li className='-translate-x-full opacity-0 transition duration-1000'>
            React, tailwind and Next.js, with a focus on building dynamic and responsive user interfaces
          </li>
          <li className='-translate-x-full opacity-0 transition duration-1000'>
            MongoDB and postgresql, with a focus on implementing a scalable database
          </li>
          <li className='-translate-x-full opacity-0 transition duration-1000'>
            Python, with a focus on data analysis
          </li>
          <li className='-translate-x-full opacity-0 transition duration-1000'>
            Docker, for containerizing applications and managing development environments
          </li>
        </ul>
      </div>
      <ul ref={skillsIconRef} className='flex items-center flex-wrap justify-center gap-6 select-none'>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-100'>
          <ActionToolTip align='center' side='top' label='TypeScript'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://www.typescriptlang.org'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='typescript icon'
                width={1200}
                height={1200}
                src='/images/typescript.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-100'>
          <ActionToolTip align='center' side='top' label='NextJS'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://www.nextjs.org'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='nextjs icon'
                width={1200}
                height={1200}
                src='/images/next-js.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-200'>
          <ActionToolTip align='center' side='top' label='NodeJS'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://www.nodejs.org'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='nodejs icon'
                width={1200}
                height={1200}
                src='/images/node-js.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-200'>
          <ActionToolTip align='center' side='top' label='PostgreSQL'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://www.postgresql.org'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='postgresql icon'
                width={1200}
                height={1200}
                src='/images/postgresql.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-500'>
          <ActionToolTip align='center' side='top' label='MongoDB'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://www.mongodb.com'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='mongodb icon'
                width={1200}
                height={1200}
                src='/images/mongodb.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-500'>
          <ActionToolTip align='center' side='top' label='Docker'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://www.docker.com'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='docker icon'
                width={1200}
                height={1200}
                src='/images/docker.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-500'>
          <ActionToolTip align='center' side='top' label='TailwindCSS'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://www.tailwindcss.com'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='tailwindcss icon'
                width={1200}
                height={1200}
                src='/images/tailwind-css.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-700'>
          <ActionToolTip align='center' side='top' label='React'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://www.react.dev'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='react icon'
                width={1200}
                height={1200}
                src='/images/react.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-700'>
          <ActionToolTip align='center' side='top' label='Python'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://www.python.org'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='react icon'
                width={1200}
                height={1200}
                src='/images/python.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-700'>
          <ActionToolTip align='center' side='top' label='Prisma'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://www.prisma.io/'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='prisma icon'
                width={1200}
                height={1200}
                src='/images/prisma.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-1000'>
          <ActionToolTip align='center' side='top' label='HTML5'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://developer.mozilla.org/en-US/docs/Learn/HTML'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='html5 icon'
                width={1200}
                height={1200}
                src='/images/html5.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-1000'>
          <ActionToolTip align='center' side='top' label='CSS'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://developer.mozilla.org/en-US/docs/Learn/css'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='css icon'
                width={1200}
                height={1200}
                src='/images/css3.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className='bg-[#171717] duration-700 -translate-x-full rounded-lg border border-zinc-700 opacity-0 transition md:delay-1000'>
          <ActionToolTip align='center' side='top' label='Javascript'>
            <Link
              replace={true}
              scroll
              target='_blank'
              href='https://developer.mozilla.org/en-US/docs/Learn/javascript'
              className='flex rounded-lg p-2 transition duration-300 hover:bg-[#242424] lg:p-4'
            >
              <Image
                className='size-[50px] sm:size-[64px] lg:size-[80px]'
                alt='javascript icon'
                width={1200}
                height={1200}
                src='/images/javascript.svg'
              />
            </Link>
          </ActionToolTip>
        </li>
      </ul>
    </section>
  )
}
