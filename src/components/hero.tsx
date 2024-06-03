import Link from 'next/link'
import { AnimateText } from './ui/animate-text'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'

export const Hero = () => {
  return (
    <section className='relative h-[calc(100vh-56.8px)] pt-40 after:absolute after:bottom-0 after:w-full after:shadow-[0px_10px_40px_60px_#0d0d0d] after:content-[""]'>
      <div>
        <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="#e5e5e5" />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="#737373" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#737373" />
      </div>
      <div className="absolute left-0 top-0 flex h-[calc(100vh-56.8px)] w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.04]"></div>
      <div className="relative z-10 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center sm:max-w-[38rem] md:max-w-3xl lg:max-w-4xl">
          <h3 className="text-center text-xs uppercase tracking-widest text-primary">
            <AnimateText text="transforming vision into reality" />
          </h3>
          <TextGenerateEffect
            words="Passionate about building Amazing Digital Experiences"
            className="mb-2 text-center text-[34px] sm:text-4xl md:text-5xl lg:text-6xl"
          />
          <p className="text-md mb-8 text-center md:text-lg md:tracking-wider lg:text-2xl">Hi, i&apos;m Mohamed 🖐️</p>
          <Link
            href="/#projects"
            replace={true}
            className="animate-shimmer flex h-12 items-center justify-center rounded-md border border-border bg-[linear-gradient(224deg,#000,45%,#5c5c5c2e,55%,#000)] bg-[length:200%_100%] px-6 font-medium text-secondary transition-colors"
          >
            view my work
          </Link>
        </div>
      </div>
    </section>
  )
}
