import { hash } from 'bcryptjs'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import { prisma } from '@/lib/prisma'

import { UnauthorizedError } from '../__errors/unauthorized-error'

export async function resetPassword(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/password/reset',
    {
      schema: {
        tags: ['Auth'],
        summary: 'Reset password',
        body: z.object({
          token: z.string(),
          password: z.string().min(6),
        }),
        response: {
          204: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { token, password } = request.body

      const tokenFromDb = await prisma.token.findUnique({
        where: {
          id: token,
        },
      })

      if (!tokenFromDb) {
        throw new UnauthorizedError('Invalid token')
      }

      const passwordHash = await hash(password, 6)

      await prisma.user.update({
        where: {
          id: tokenFromDb.userId,
        },
        data: { passwordHash },
      })
      return reply.status(204).send()
    },
  )
}
