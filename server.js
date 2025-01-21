import {fastify} from "fastify";

const app = fastify({logger: true});

app.get('/', (request, reply) => {
    reply.send({hello: 'world'});
});

await app.listen({port: 3000});
