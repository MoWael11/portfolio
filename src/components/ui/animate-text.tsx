'use client'

import { motion } from 'framer-motion'

export const AnimateText = ({ text }: { text: string; className?: string }) => {
  return (
    <>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            delay: index * 0.03,
            duration: 0.4
          }}
        >
          {letter}
        </motion.span>
      ))}
    </>
  )
}
