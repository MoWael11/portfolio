import Image from 'next/image'
import Link from 'next/link'
import { ToggleMoblie } from './toggle-mobile'

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-b-border bg-[#000000ac] py-2 backdrop-blur-md">
      <section className="container flex items-center justify-between">
        <Link href="/">
          <Image width={90} height={90} className="size-10 select-none" priority src="/images/logo.svg" alt="logo" />
        </Link>
        <ToggleMoblie />
        <nav className="hidden sm:block">
          <ul className="flex list-none items-center gap-10 tracking-wide">
            <li>
              <Link
                replace={true}
                className="text-xl text-secondary transition duration-300 hover:text-primary"
                href="/#skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                replace={true}
                className="text-xl text-secondary transition duration-300 hover:text-primary"
                href="/#projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                replace={true}
                className="text-xl text-secondary transition duration-300 hover:text-primary"
                href="/#contact"
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
