import { FastifyRequest, FastifyReply } from "npm:fastify@4"

class HomeController {

    index = async (request: FastifyRequest, reply: FastifyReply) => {
        reply.send({
            message: 'hello'
        })
    }
}

export default new HomeController()

