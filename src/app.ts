import Fastify from 'npm:fastify@4'
import { appRoutes } from './http/routes.ts';
import { ZodError } from 'npm:zod';

export const app = Fastify()


await app.register(appRoutes)

app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
        return reply.status(400).send({
            message: 'Validation Error',
            issues: error.format(),
        })
    }
})