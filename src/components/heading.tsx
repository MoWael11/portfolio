import { ReactNode } from 'react'

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className='text-shadow w-full pb-10 pt-2 text-4xl tracking-wider text-primary text-center  '>{children}</h2>
  )
}
