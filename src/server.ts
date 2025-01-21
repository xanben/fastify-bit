import {fastify} from "fastify";
import path from "path";
import autoload from "@fastify/autoload";

const app = fastify({logger: true})
    .register(autoload, {dir: path.join(import.meta.dirname, 'routes')})

await app.listen({port: process.env.API_PORT || 3000});
