'use client'

import { useNav } from '@/hooks/use-nav'
import Link from 'next/link'

export const MobileNav = () => {
  const { isOpen } = useNav()
  if (!isOpen) return null

  return (
    <nav className="container fixed right-0 top-[56.8px] z-20 w-full border-b border-border bg-[#000000ac] backdrop-blur-lg">
      <ul className="flex flex-col text-primary">
        <li className="w-full">
          <Link
            href="/#skills"
            className="flex w-full py-8 text-xl font-medium transition-colors duration-300 hover:text-zinc-400"
          >
            Skils
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/#projects"
            className="flex w-full py-8 text-xl font-medium transition-colors duration-300 hover:text-zinc-400"
          >
            Projects
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/#contact"
            className="flex w-full py-8 text-xl font-medium transition-colors duration-300 hover:text-zinc-400"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
