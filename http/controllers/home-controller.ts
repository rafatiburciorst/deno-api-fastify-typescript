import { FastifyRequest, FastifyReply } from "npm:fastify@4"

class HomeController {

    index = async (request: FastifyRequest, reply: FastifyReply) => {
        reply.send({
            message: 'hello world'
        })
    }


}

export default new HomeController()

