// server/api/contact.post.ts
import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
    // const { nom,  message } = await readBody(event)
    const config = useRuntimeConfig()
    const resend = new Resend(config.resendApiKey)

    const { error } = await resend.emails.send({
        from: 'Site web <onboarding@resend.dev>',
        to: 'site@rr.fr',
        replyTo: 'alexandre@menand.fr',
        subject: `Message de alex`,
        text: 'test',
    })

    if (error) throw createError({ statusCode: 500, statusMessage: error.message })
    return { ok: true }
})