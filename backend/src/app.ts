import fastify from 'fastify'
import { env } from 'process'
import { ZodError } from 'zod'
import { router } from './http/routes'
import cors from '@fastify/cors'

export const app = fastify()

app.register(router)

app.register(cors, {
  origin: '*',
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
})


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
