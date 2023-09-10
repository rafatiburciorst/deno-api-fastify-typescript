import { FastifyRequest, FastifyReply } from "npm:fastify@4"
import { kv } from "../../db/kv-db.ts";


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

        const product = {
            id: crypto.randomUUID(),
            name: 'Computer',
            price: 6000.0
        }

        await kv.set(['products', ''], product)

        reply.send({
            result: 'OK'
        })
    }


}

export default new HomeController()

