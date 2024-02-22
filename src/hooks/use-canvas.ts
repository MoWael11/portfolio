import { create } from 'zustand'

interface CanvasData {
  ease: number
  force: number
  friction: number
  radius: number
  gap: number
}

interface CanvasStore {
  data: CanvasData
  isOpen: boolean
  setData: (data: CanvasData) => void
  setIsOpen: (isOpen: boolean) => void
}

export const useCanvas = create<CanvasStore>((set) => ({
  data: {
    ease: 0.2,
    gap: 2,
    force: 6,
    friction: 0.7,
    radius: 40,
  },
  isOpen: false,
  setData: (data: CanvasData) => set({ data }),
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}))
