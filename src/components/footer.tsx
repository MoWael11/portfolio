'use client'

import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => (
  <footer className="border-t border-t-border bg-black">
    <div className="container flex items-center justify-between py-4">
      <p className="sm:text-lg">Mohamed Wael &copy; {new Date().getFullYear()}</p>
      <Link href="https://github.com/MoWael11" passHref={false} target="_blank" aria-label="My github profile">
        <div className="relative size-[30px] md:size-[40px]">
          <Image src="/images/github.svg" fill alt="github image" />
        </div>
      </Link>
    </div>
  </footer>
)
