import Image from 'next/image'
import Link from 'next/link'
import { ToggleMoblie } from './toggle-mobile'

export const Header = () => {
  return (
    <header className='sticky z-10 top-0 py-2 bg-[#000000ac] backdrop-blur-md border-b border-b-zinc-700'>
      <section className='container flex justify-between items-center'>
        <Link href='/'>
          <Image width={90} height={90} className='size-10 select-none' priority src='/images/logo.svg' alt='logo' />
        </Link>
        <ToggleMoblie />
        <nav className='hidden sm:block'>
          <ul className='list-none flex gap-10 items-center tracking-wide'>
            <li>
              <Link
                replace={true}
                className='text-xl text-zinc-400 hover:text-primary transition duration-300'
                href='/#skills'
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                replace={true}
                className='text-xl text-zinc-400 hover:text-primary transition duration-300'
                href='/#projects'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                replace={true}
                className='text-xl text-zinc-400 hover:text-primary transition duration-300'
                href='/#contact'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}
