import { FastifyRequest, FastifyReply } from "npm:fastify@4"
import { kv } from "../../db/kv-db.ts";
import { Product } from "../../models/product.ts";
import { z } from "npm:zod";


class HomeController {

    index = async (request: FastifyRequest, reply: FastifyReply) => {

        const res = await kv.list({ prefix: ['products'] })
        const products = []

        for await (const item of res) products.push(item.value)

        reply.send({
            message: products
        })
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


}

export default new HomeController()

