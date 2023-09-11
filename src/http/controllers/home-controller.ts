import { FastifyRequest, FastifyReply } from "npm:fastify@4"
import { kv } from "../../db/kv-db.ts";
import { Product } from "../../models/product.ts";
import { z } from "npm:zod";
import { prisma } from "../../db/prisma.service.ts";


class HomeController {

    index = async (request: FastifyRequest, reply: FastifyReply) => {

        const users = prisma.user.findMany()

        
    }


    create = async (request: FastifyRequest, reply: FastifyReply) => {

        const schema = z.object({
            name: z.string(),
            price: z.coerce.number(),
            comment: z.string()
        })

        const validation = schema.safeParse(request.body)

        if(validation.success === false) {
            console.log(validation.error.format())
            throw new Error('Invalid environment variable')
        } 
        const id = crypto.randomUUID()
        const product = new Product({
            id,
            name: validation.data.name,
            price: validation.data.price,
            comment: validation.data.comment
        });

        const result = await kv.set(['products', id], product)

        if(result.ok) {
            reply.status(201).send({
                status: result.ok,
                version: result.versionstamp,
            })
        }

        reply.status(400).send({
            message: 'something went wrong'
        })
    }

    delete = async (request: FastifyRequest, reply: FastifyReply) => {
        // await kv.delete(['users'])
        const result = await kv.list({prefix: ['products']})
        console.log(result);
        
        reply.send({
            message: 'deleted'
        })
    }
}

export default new HomeController()

