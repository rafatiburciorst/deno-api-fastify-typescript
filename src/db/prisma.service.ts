import { PrismaClient } from '../../generated/client/deno/edge.ts'
import { load } from "https://deno.land/std@0.201.0/dotenv/mod.ts";

const envVars = await load();
console.log(envVars)
export const prisma = new PrismaClient({
    datasources: {
        db: {
            url: envVars.DATABASE_URL
        }
    }
})