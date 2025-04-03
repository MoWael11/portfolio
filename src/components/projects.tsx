'use client'

import { projects } from '@/config/projects'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Heading } from './heading'
import { buttonVariants } from './ui/button'

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
    <section id="projects" className="container mt-20 md:min-h-screen">
      <Heading>Projects</Heading>
      <div
        ref={cardsRef}
        onMouseMove={(e) => handleMouseMove(e)}
        id="cards"
        className="grid grid-cols-projects-lg items-center justify-center gap-2 lg:grid-cols-projects"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className='card relative flex h-full rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'
          >
            <div className="relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-[#111] p-2">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]">
                  <Image
                    width={1200}
                    height={1200}
                    src={project.image}
                    alt={`${project.title} image`}
                    className="h-full w-full select-none"
                  />
                </div>
                <div className="flex flex-col gap-2 py-2">
                  <h3 className="mb-2 text-xl font-medium sm:text-2xl">{project.title}</h3>
                  <p>
                    Category <span className="text-secondary sm:text-lg">{project.category}</span>
                  </p>
                </div>
              </div>
              <p className="w-[85%] text-[16px] leading-5 sm:text-lg">{project.description}</p>
            </div>
            <Link
              className={cn(buttonVariants({ size: 'sm' }), 'absolute bottom-4 right-4 z-[4] px-2 py-1')}
              target="_blank"
              href={project.link}
            >
              {project.linkText}
            </Link>
            <div className="card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl transition-opacity duration-500 md:block"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
