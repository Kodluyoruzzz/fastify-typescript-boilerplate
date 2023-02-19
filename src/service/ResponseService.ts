import { FastifyReply } from "fastify";
import { IResult } from "../interface/IResult";

class responseService {


    public send(result:IResult,reply:FastifyReply){
        let { statusCode, status, data, error } = result;
        console.log(error)
        const code:number = statusCode ?? (status ? 200 : 400 )

        error = !status && error?.message?.startsWith('MSG') ? error?.message : 'MSG0000'
        
        reply.code(code).send(status ? data : { error });
    }
}

export const send = new responseService().send