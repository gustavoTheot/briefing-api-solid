import fastify from 'fastify'
import { env } from 'process'
import { ZodError } from 'zod'
import { router } from './http/routes'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(router, {
  prefix: 'create'
})
app.register(cookie)


app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
