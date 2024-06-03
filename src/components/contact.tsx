'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { sendEmail } from '@/lib/actions/contactActions'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import { Heading } from './heading'
import { Button } from './ui/button'
import { Input } from './ui/input'

const FormSchema = z.object({
  name: z.string().min(1, 'Name field is required'),
  phone: z.string().optional(),
  email: z.string().trim().min(1, 'Email field is required').email('Invalid email'),
  message: z.string().min(1, 'Message field is required')
})

export const Contact = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      message: '',
      name: '',
      phone: ''
    }
  })

  const isLoading = form.formState.isSubmitting
  const { toast } = useToast()

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const { name, email, message, phone } = data

      await sendEmail(name, email, phone && phone?.length > 0 ? phone : ' - ', message)
      toast({
        title: 'Email sent',
        description: "Thank you for reaching out! I'll get back to you as soon as possible."
      })
      form.reset()
    } catch (err) {
      toast({
        title: 'Error sending email',
        description: 'Please try again later',
        variant: 'destructive'
      })
    }
  }

  return (
    <section
      id="contact"
      className='container relative mt-20 min-h-[90vh] before:absolute before:left-1/2 before:top-1/2 before:z-[-1] before:hidden before:h-[300px] before:w-[900px] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[url("/images/contact.png")] before:bg-cover before:contrast-0 before:content-[""] before:sm:block md:before:h-[450px] md:before:w-[1110px] lg:before:h-[600px] lg:before:w-[1400px] lg:before:translate-x-[-46%]'
    >
      <Heading>Contact</Heading>
      <h3 className="mb-8 text-lg md:text-xl">I&apos;m looking forward to hearing from you!</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-y-0">
                <label htmlFor="name" aria-label="name" className="sr-only">
                  insert your name
                </label>
                <FormControl>
                  <Input
                    id="name"
                    spellCheck
                    autoComplete="off"
                    placeholder="Your Name"
                    className="bg- w-full rounded-sm border border-border bg-background/50 px-4 py-2 transition-colors duration-500 placeholder:transition-opacity placeholder:duration-500 focus:border-white focus:placeholder:opacity-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-y-0">
                <label htmlFor="phone" aria-label="phone" className="sr-only">
                  insert your phone number (optional)
                </label>
                <FormControl>
                  <Input
                    id="phone"
                    spellCheck
                    autoComplete="off"
                    placeholder="Your Phone (optional)"
                    className="bg- w-full rounded-sm border border-border bg-background/50 px-4 py-2 transition-colors duration-500 placeholder:transition-opacity placeholder:duration-500 focus:border-white focus:placeholder:opacity-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-y-0 md:col-span-2">
                <label htmlFor="email" aria-label="email" className="sr-only">
                  insert your name
                </label>
                <FormControl>
                  <Input
                    id="email"
                    spellCheck
                    autoComplete="off"
                    placeholder="Your Email"
                    className="bg- w-full rounded-sm border border-border bg-background/50 px-4 py-2 transition-colors duration-500 placeholder:transition-opacity placeholder:duration-500 focus:border-white focus:placeholder:opacity-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-y-0 md:col-span-2">
                <label htmlFor="message" aria-label="message" className="sr-only">
                  insert your message
                </label>
                <FormControl>
                  <textarea
                    id="message"
                    spellCheck
                    autoComplete="off"
                    placeholder="Your Message"
                    rows={6}
                    className="bg- w-full rounded-sm border border-border bg-background/50 px-4 py-2 transition-colors duration-500 placeholder:transition-opacity placeholder:duration-500 focus:border-white focus:placeholder:opacity-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button isLoading={isLoading} disabled={isLoading} className="rounded-sm md:col-span-2">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  )
}
