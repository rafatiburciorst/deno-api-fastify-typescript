import { app } from "./app.ts";

const port = 3000

app.listen({
    host: '0.0.0.0',
    port: port
}).then(() => console.log(`Server Running port ${port}`))