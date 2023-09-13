import { FastifyInstance } from "npm:fastify@4";

import userController from "../controllers/user-controller.ts";
import { createUserDto } from "../middleware/user-dto.ts";

export async function userRoute(app: FastifyInstance) {
    app.post('/user', userController.create)
    app.get('/user', userController.findAll)
}

