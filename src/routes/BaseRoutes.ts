import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {baseController} from "../controller/BaseController";

async function baseRoutes(fastify: FastifyInstance) {

    fastify.get(
        '/base',
        { schema: {} },
        baseController.base)


}

export default baseRoutes