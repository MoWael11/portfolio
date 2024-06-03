import { create } from 'zustand'

interface NavStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useNav = create<NavStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen })
}))
