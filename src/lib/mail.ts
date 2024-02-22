import nodemailer from 'nodemailer'
import Handlebars from 'handlebars'
import { ContactTemplate } from './templates/contact'

export async function sendMail({ body, subject }: { body: string; subject: string }) {
  const { SMTP_EMAIL, SMTP_PASSWORD, EMAIL } = process.env

  const trnasport = nodemailer.createTransport({
    service: 'gmail',
    port: 2525,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  })

  await trnasport.sendMail({
    from: SMTP_EMAIL,
    to: EMAIL,
    subject,
    html: body,
  })
}

export function compileCatactTemplate(name: string, email: string, phone: string, message: string) {
  const template = Handlebars.compile(ContactTemplate)
  const htmlBody = template({ name, email, phone, message })
  return htmlBody
}
