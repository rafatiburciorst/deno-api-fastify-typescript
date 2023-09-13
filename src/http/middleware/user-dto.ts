import { FastifyReply, FastifyRequest } from "npm:fastify@4";
import { z } from "npm:zod";

export async function createUserDto(request: FastifyRequest, _: FastifyReply, done: any) {

    const userSchema = z.object({
        name: z.string().max(100),
        email: z.string().email().max(100),
        password: z.string(),
        password_confirmation: z.string()
    })

    const user = userSchema.parse(request.body)
    if (user.password !== user.password_confirmation) {
        throw new Error('Password does not match')
    }
    console.log('validado')
    done()
}