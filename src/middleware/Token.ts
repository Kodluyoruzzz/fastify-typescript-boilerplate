import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {config} from "dotenv";
import {ProjectSettings} from "../constant/ProjectSettings";

import {errorCode} from "../constant/ErrorCode";

config();
declare module "fastify" {
    export interface FastifyInstance {
        Token: any;

    }
}

class Middleware {

    public  token(fastify: FastifyInstance) {
        fastify.decorate(
            "Token", (request: FastifyRequest, reply: FastifyReply) => {
                try {
                    const token = request.headers.authorization;
                    if (!token) throw new Error(errorCode.MSG0001)
                    if (request.headers.authorization != ProjectSettings.TOKEN) {
                        reply.code(401).send({
                            success: false,
                            data: null,
                            error: errorCode.MSG0002
                        })
                    }
                } catch (error) {
                    reply.status(401).send({
                        success: false,
                        data: null,
                        error,
                    });
                }
            }
        )
    }
}

export const middleware = new Middleware()