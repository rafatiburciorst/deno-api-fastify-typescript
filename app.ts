import Fastify from 'npm:fastify@4'
import { appRoutes } from './http/routes.ts';
import cors from 'npm:@fastify/cors'


export const app = Fastify()

app.register(cors)
app.register(appRoutes)



