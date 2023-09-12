import { serve } from 'https://deno.land/std@0.140.0/http/server.ts'
import { PrismaClient } from './generated/client/deno/edge.ts'

const prisma = new PrismaClient()

async function handler(request: Request) {
  const log = await prisma.user.create({
    data: {
      name: 'Rafael',
      email: 'rafael.tiburcio@live.com',
      password: '123456'
    },
  })
  const body = JSON.stringify(log, null, 2)
  return new Response(body, {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })
}

serve(handler)