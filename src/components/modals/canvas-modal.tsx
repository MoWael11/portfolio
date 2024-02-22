import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { HelpCircleIcon } from 'lucide-react'
import { useEffect } from 'react'

import { useCanvas } from '@/hooks/use-canvas'
import { useToast } from '@/hooks/use-toast'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ActionToolTip } from '@/components/action-tooltip'
import { Button } from '@/components/ui/button'
import { ToastAction } from '../ui/toast'

const FormSchema = z.object({
  force: z.coerce
    .number({
      invalid_type_error: 'Force must be a number',
    })
    .min(0.0001, {
      message: 'Force must be greater than 0',
    }),
  friction: z.coerce
    .number({
      invalid_type_error: 'Friction must be a number',
    })
    .min(0.0001, {
      message: 'Friction must be greater than 0',
    }),
  radius: z.coerce
    .number({
      invalid_type_error: 'Radius must be a number',
    })
    .min(0.0001, {
      message: 'Radius must be greater than 0',
    }),
  ease: z.coerce
    .number({
      invalid_type_error: 'Ease must be a number',
    })
    .min(0.0001, {
      message: 'Ease must be greater than 0',
    })
    .max(1.999, {
      message: 'Ease must be less than 2',
    }),
  gap: z.coerce
    .number({
      invalid_type_error: 'Size must be a number',
    })
    .int({
      message: 'Size must be an integer',
    })
    .min(1, {
      message: 'Size must be greater than 0',
    })
    .max(12, {
      message: 'Size must be less than 12',
    }),
})

export const CanvasModal = () => {
  const { data, setData, isOpen, setIsOpen } = useCanvas()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  useEffect(() => {
    form.setValue('gap', data.gap)
    form.setValue('force', data.force)
    form.setValue('friction', data.friction)
    form.setValue('radius', data.radius)
    form.setValue('ease', data.ease)
  }, [data.ease, data.force, data.friction, data.gap, data.radius, form, isOpen])

  useEffect(() => {
    const onKoyDown = (e: KeyboardEvent) => {
      if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        form.handleSubmit(onSubmit)()
      }
    }

    window.addEventListener('keydown', onKoyDown)

    return () => window.removeEventListener('keydown', onKoyDown)
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setData(data)
    onClose()

    if (data.friction >= 1) {
      toast({
        title: 'Friction is too high',
        description: `With a friction value ${
          data.friction === 1
            ? 'of one, particles will freeze'
            : 'grater than one, particels will have an almost infinite force'
        }`,
        action: <Button onClick={() => setData({ ...data, friction: 0.7 })}>Undo</Button>,
      })
    }
  }

  const onClose = () => {
    form.reset()

    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='bg-card text-primary p-0'>
        <DialogHeader className='pt-8 px-6'>
          <DialogTitle className='text-2xl text-center font-bold'>Logo Animation Settings</DialogTitle>
          <DialogDescription className='text-center text-zinc-300'>
            Adjust the parameters below to customize the behavior and appearance of the particle logo animation.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-4 px-6'>
              <FormField
                name='friction'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className='flex items-center gap-4'>
                      <FormLabel className='text-xl font-bold text-zinc-300 w-24 flex items-center'>
                        Friction
                        <ActionToolTip
                          label='Determines the rate at which the logo returns to its initial state; values greater than 1 prevent it from returning completely'
                          align='center'
                          side='top'
                        >
                          <HelpCircleIcon className='w-4 h-4 text-zinc-400 ml-2' />
                        </ActionToolTip>
                      </FormLabel>
                      <FormControl>
                        <Input
                          autoFocus
                          className='b-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-16'
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='radius'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className='flex items-center gap-4'>
                      <FormLabel className='text-xl font-bold text-zinc-300 w-24 flex items-center'>
                        Radius
                        <ActionToolTip
                          label='Distance from the center of the indicator within which particles are affected'
                          align='center'
                          side='top'
                        >
                          <HelpCircleIcon className='w-4 h-4 text-zinc-400 ml-2' />
                        </ActionToolTip>
                      </FormLabel>
                      <FormControl>
                        <Input className='b-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-16' {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='force'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className='flex items-center gap-4'>
                      <FormLabel className='text-xl font-bold text-zinc-300 w-24 flex items-center'>
                        Force
                        <ActionToolTip
                          label=' Strength of the push exerted by the cursor on the particles when in close proximity'
                          align='center'
                          side='top'
                        >
                          <HelpCircleIcon className='w-4 h-4 text-zinc-400 ml-2' />
                        </ActionToolTip>
                      </FormLabel>
                      <FormControl>
                        <Input className='b-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-16' {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='ease'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className='flex items-center gap-4'>
                      <FormLabel className='text-xl font-bold text-zinc-300 w-24 flex items-center'>
                        Ease
                        <ActionToolTip
                          label='Speed at which the component returns to its initial state; increasing it makes the return faster (opposite of friction)'
                          align='center'
                          side='top'
                        >
                          <HelpCircleIcon className='w-4 h-4 text-zinc-400 ml-2' />
                        </ActionToolTip>
                      </FormLabel>
                      <FormControl>
                        <Input className='b-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-16' {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='gap'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className='flex items-center gap-4'>
                      <FormLabel className='text-xl font-bold text-zinc-300 w-24 flex items-center'>
                        Size
                        <ActionToolTip label='Size of each particle, ranging from 1 to 12' align='center' side='top'>
                          <HelpCircleIcon className='w-4 h-4 text-zinc-400 ml-2' />
                        </ActionToolTip>
                      </FormLabel>
                      <FormControl>
                        <Input className='b-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-16' {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className='px-6 pb-4'>
              <Button type='submit'>Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
