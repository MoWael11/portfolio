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
          entry.target.classList.add('animate-slide-in')
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
    <section id="skills" className="container relative mt-20 md:min-h-screen">
      <Heading>Skills</Heading>
      <div className="absolute right-[100px] top-[140px] z-[-1] hidden select-none lg:block">
        <Image width={140} height={140} src="/images/skills.png" alt="skills icon" />
      </div>
      <div className="mb-10 leading-8">
        <p ref={paragraphRef} className="mb-6 text-xl opacity-0 duration-500">
          I have expertise in a range of programming languages and technologies, including:
        </p>
        <ul ref={skillsRef} className="flex list-disc flex-col gap-4 overflow-hidden pl-8 text-lg">
          <li className="opacity-0">JavaScript, with a focus on Node.js and Express.js for server-side development</li>
          <li className="opacity-0">
            React, tailwind and Next.js, with a focus on building dynamic and responsive user interfaces
          </li>
          <li className="opacity-0">MongoDB and postgresql, with a focus on implementing a scalable database</li>
          <li className="opacity-0">Python, with a focus on data analysis</li>
          <li className="opacity-0">Docker, for containerizing applications and managing development environments</li>
        </ul>
      </div>
      <ul ref={skillsIconRef} className="flex select-none flex-wrap items-center justify-center gap-6">
        <li className="border-borderd rounded-lg border opacity-0 duration-700 md:delay-100">
          <ActionToolTip align="center" side="top" label="TypeScript">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://www.typescriptlang.org"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="typescript icon"
                width={1200}
                height={1200}
                src="/images/typescript.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className="rounded-lg border border-border opacity-0 duration-700 md:delay-200">
          <ActionToolTip align="center" side="top" label="NextJS">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://www.nextjs.org"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="nextjs icon"
                width={1200}
                height={1200}
                src="/images/next-js.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className="rounded-lg border border-border opacity-0 duration-700 md:delay-300">
          <ActionToolTip align="center" side="top" label="NodeJS">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://www.nodejs.org"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="nodejs icon"
                width={1200}
                height={1200}
                src="/images/node-js.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className="rounded-lg border border-border opacity-0 duration-700 md:delay-400">
          <ActionToolTip align="center" side="top" label="PostgreSQL">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://www.postgresql.org"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="postgresql icon"
                width={1200}
                height={1200}
                src="/images/postgresql.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className="rounded-lg border border-border opacity-0 duration-700 md:delay-500">
          <ActionToolTip align="center" side="top" label="MongoDB">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://www.mongodb.com"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="mongodb icon"
                width={1200}
                height={1200}
                src="/images/mongodb.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className="rounded-lg border border-border opacity-0 duration-700 md:delay-600">
          <ActionToolTip align="center" side="top" label="Docker">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://www.docker.com"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="docker icon"
                width={1200}
                height={1200}
                src="/images/docker.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className="rounded-lg border border-border opacity-0 duration-700 md:delay-700">
          <ActionToolTip align="center" side="top" label="TailwindCSS">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://www.tailwindcss.com"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="tailwindcss icon"
                width={1200}
                height={1200}
                src="/images/tailwind-css.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className="rounded-lg border border-border opacity-0 duration-700 md:delay-800">
          <ActionToolTip align="center" side="top" label="React">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://www.react.dev"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="react icon"
                width={1200}
                height={1200}
                src="/images/react.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className="rounded-lg border border-border opacity-0 duration-700 md:delay-900">
          <ActionToolTip align="center" side="top" label="Python">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://www.python.org"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="react icon"
                width={1200}
                height={1200}
                src="/images/python.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className="rounded-lg border border-border opacity-0 duration-700 md:delay-1100">
          <ActionToolTip align="center" side="top" label="Prisma">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://www.prisma.io/"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="prisma icon"
                width={1200}
                height={1200}
                src="/images/prisma.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className="rounded-lg border border-border opacity-0 duration-700 md:delay-1200">
          <ActionToolTip align="center" side="top" label="HTML5">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="html5 icon"
                width={1200}
                height={1200}
                src="/images/html5.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className="rounded-lg border border-border opacity-0 duration-700 md:delay-1300">
          <ActionToolTip align="center" side="top" label="CSS">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Learn/css"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="css icon"
                width={1200}
                height={1200}
                src="/images/css3.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
        <li className="rounded-lg border border-border opacity-0 duration-700 md:delay-1400">
          <ActionToolTip align="center" side="top" label="Javascript">
            <Link
              replace={true}
              scroll
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Learn/javascript"
              className="flex rounded-lg bg-[#0f0f0f] p-2 transition duration-300 hover:bg-[#141414] lg:p-4"
            >
              <Image
                className="size-[50px] sm:size-[64px] lg:size-[80px]"
                alt="javascript icon"
                width={1200}
                height={1200}
                src="/images/javascript.svg"
              />
            </Link>
          </ActionToolTip>
        </li>
      </ul>
    </section>
  )
}
