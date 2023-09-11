import { FastifyReply, FastifyRequest } from "npm:fastify@4"

import { prisma } from "../../db/prisma.service.ts";
import { User } from "../../model/user-schema.ts";

class UserController {

    create = async (request: FastifyRequest, reply: FastifyReply) => {

        const data = request.body as User
        const checkUser = await this.findByEmail(data.email)

        if (checkUser) reply.status(400).send({ message: 'email already exists' })

        try {
            const user = await prisma.user.create({
                data
            })
            reply.status(201).send({
                user
            })
        } catch (e) {
            console.log(e.message);
            throw new Error("Error on save");
        }
    }

    private findByEmail = async (email: string) => {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        return user
    }

    findAll = async (request: FastifyRequest, reply: FastifyReply) => {
        const users = await prisma.user.findMany()
        reply.status(200).send({
            users
        })
    }
}

export default new UserController()