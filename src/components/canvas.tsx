'use client'

import { Effect } from '@/classes/effect'
import { useEffect, useRef, useState } from 'react'
import { LogoImage } from './logo-image'
import { useCanvas } from '@/hooks/use-canvas'
import { Button } from './ui/button'
import { Settings } from 'lucide-react'

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [render, setRender] = useState(true)
  const [width, setWidth] = useState(0)

  const { data, setIsOpen } = useCanvas()

  useEffect(() => {
    const canvas = canvasRef.current
    const image = imageRef.current
    const ctx = canvas?.getContext('2d', { willReadFrequently: true })

    let animationFrameId: number

    if (!ctx || !canvas || !image) return

    canvas.width = canvas.parentElement?.clientWidth || 700
    canvas.height = 700

    const effect = new Effect({
      canvas,
      context: ctx,
      height: canvas.height,
      width: canvas.width,
      image,
      gap: data.gap,
      ease: data.ease,
      force: data.force,
      radius: data.radius,
      friction: data.friction,
    })

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      effect.draw()
      effect.update()
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      canvas.removeEventListener('mousemove', effect.onMouseMove)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [data, width])

  useEffect(() => {
    const onResize = () => {
      if (window?.innerWidth > 1020) {
        setRender(true)
      } else {
        setRender(false)
      }
      setWidth(window?.innerWidth || 0)
    }

    onResize()

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  if (!render) return null

  return (
    <div className='flex-1 flex items-center justify-center relative'>
      <Button
        aria-label='Animation settings'
        onClick={() => setIsOpen(true)}
        variant={'outline'}
        size={'icon'}
        className='absolute top-4 right-4'
      >
        <Settings className='w-6 h-6 text-zinc-300' />
      </Button>
      <canvas ref={canvasRef} />
      <LogoImage imageRef={imageRef} />
    </div>
  )
}
