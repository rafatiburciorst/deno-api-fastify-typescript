import Fastify from 'npm:fastify@4'
import { ZodError } from 'npm:zod';

import { appRoutes } from './http/routes.ts';
import { userRoute } from './http/routes/user-routes.ts';

export const app = Fastify()


await app.register(appRoutes)
await app.register(userRoute)

app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
        return reply.status(400).send({
            message: 'Validation Error',
            issues: error.format(),
        })
    }
})