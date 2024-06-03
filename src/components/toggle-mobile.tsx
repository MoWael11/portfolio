'use client'

import { useEffect, useRef } from 'react'

import { useNav } from '@/hooks/use-nav'
import { cn } from '@/lib/utils'

export const ToggleMoblie = () => {
  const { setIsOpen, isOpen } = useNav()
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const button = buttonRef.current
      const elements = Array.from(button?.querySelectorAll('*') || [])

      if (isOpen && e.target !== button && !elements.some((element) => element === e.target)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => window.removeEventListener('click', onClick)
  }, [isOpen, setIsOpen])

  return (
    <button
      ref={buttonRef}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Menu"
      className="relative size-6 cursor-pointer sm:hidden"
    >
      <div
        className={cn(
          'ranslate-y-1/2 absolute top-1/2 h-[1.5px] w-6 rounded bg-primary transition-all duration-200 before:absolute before:left-0 before:h-[1.5px] before:w-6 before:translate-y-2 before:rounded before:bg-primary before:transition-all before:duration-300 before:content-[""] after:absolute after:left-0 after:h-[1.5px] after:w-6 after:-translate-y-2 after:rounded after:bg-primary after:transition-all after:duration-300 after:content-[""]',
          isOpen &&
            'bg-transparent before:top-1/2 before:-translate-y-1/2 before:-rotate-45 after:top-1/2 after:-translate-y-1/2 after:rotate-45'
        )}
      ></div>
    </button>
  )
}
