'use server'

import { compileCatactTemplate, sendMail } from '@/lib/mail'

export const sendEmail = async (name: string, email: string, phone: string, message: string) => {
  const body = compileCatactTemplate(name, email, phone, message)
  await sendMail({ body, subject: 'New contact form submission from your site' })
}
