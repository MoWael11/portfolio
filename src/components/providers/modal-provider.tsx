'use client'

import { CanvasModal } from '@/components/modals/canvas-modal'
import { useEffect, useState } from 'react'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <CanvasModal />
}
