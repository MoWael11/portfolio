'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

export const ToggleMoblie = () => {
  const [showMenu, setShowMenu] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const button = buttonRef.current
      const elements = Array.from(button?.querySelectorAll('*') || [])

      if (showMenu && e.target !== button && !elements.some((element) => element === e.target)) {
        setShowMenu(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => window.removeEventListener('click', onClick)
  }, [showMenu])

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setShowMenu(!showMenu)}
        aria-label='Menu'
        className='sm:hidden size-6 cursor-pointer relative'
      >
        <div
          className={cn(
            'absolute top-1/2 w-6 h-[1.5px] ranslate-y-1/2 rounded bg-primary transition-all duration-200 before:duration-300 after:duration-300 after:transition-all before:transition-all after:absolute before:absolute before:h-[1.5px] after:h-[1.5px] before:w-6 after:w-6 before:translate-y-2 after:-translate-y-2 before:bg-primary after:bg-primary before:rounded after:rounded before:left-0 after:left-0 after:content-[""] before:content-[""]',
            showMenu &&
              'bg-transparent before:-rotate-45 after:rotate-45 after:-translate-y-1/2 before:-translate-y-1/2 after:top-1/2 before:top-1/2'
          )}
        ></div>
      </button>
      {showMenu && (
        <nav className='container backdrop-blur-lg bg-background/70 fixed top-[56.8px] right-0 w-full'>
          <ul className='flex flex-col text-primary'>
            <li className='w-full'>
              <Link
                href='/#skills'
                className='flex w-full py-8 text-xl font-medium transition-colors duration-300 hover:text-zinc-400'
              >
                Skils
              </Link>
            </li>
            <li className='w-full'>
              <Link
                href='/#projects'
                className='flex w-full py-8 text-xl font-medium transition-colors duration-300 hover:text-zinc-400'
              >
                Projects
              </Link>
            </li>
            <li className='w-full'>
              <Link
                href='/#contact'
                className='flex w-full py-8 text-xl font-medium transition-colors duration-300 hover:text-zinc-400'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}
