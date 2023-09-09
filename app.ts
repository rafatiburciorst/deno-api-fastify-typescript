import Fastify from 'npm:fastify@4'
import { appRoutes } from './http/routes.ts';

export const app = Fastify()

app.register(appRoutes)



