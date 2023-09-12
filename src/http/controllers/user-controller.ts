import { FastifyReply, FastifyRequest } from "npm:fastify@4"

import { User } from "../../model/user-schema.ts";

class UserController {

    create = async (request: FastifyRequest, reply: FastifyReply) => {

        const data = request.body as User
        const checkUser = await this.findByEmail(data.email)


    }

    private findByEmail = async (email: string) => {
  
    }

    findAll = async (request: FastifyRequest, reply: FastifyReply) => {
       
    }
}

export default new UserController()