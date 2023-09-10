import { FastifyInstance } from "npm:fastify@4";
import homeController from "./controllers/home-controller.ts";


export async function appRoutes(app: FastifyInstance) {
    app.get('/', homeController.index)
    app.get('/create', homeController.create)
}