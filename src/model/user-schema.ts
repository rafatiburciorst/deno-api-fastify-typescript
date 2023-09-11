import { z } from "npm:zod";

const userSchema = z.object({
    name: z.string().max(100),
    email: z.string().email().max(100),
    password: z.string(),
})

export type User = z.infer<typeof userSchema>

