import { FastifyReply, FastifyRequest } from "npm:fastify@4"

import { prisma } from "../../db/prisma-db.ts";
import { User } from "../../model/user-schema.ts";

class UserController {

    create = async (request: FastifyRequest, reply: FastifyReply) => {

        const data = request.body as User
        const checkUser = await this.findByEmail(data.email)
        if (checkUser) reply.status(400).send({ message: 'User already exsists' })
        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: data.password,
                name: data.name,
            }
        })
        reply.status(201).send({ user })
    }

    private findByEmail = async (email: string) => {
        const user = await prisma.user.findUnique({ where: { email } })
        return user
    }

    findAll = async (_: FastifyRequest, reply: FastifyReply) => {
        const user = await prisma.user.findMany()
        reply.status(200).send({ user })
    }
}

export default new UserController()