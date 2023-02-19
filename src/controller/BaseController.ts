import {FastifyReply, FastifyRequest} from "fastify";
import {baseService} from "../service/BaseService";
import { send } from "../service/ResponseService";


class BaseController {
   
    public async base(request:FastifyRequest,reply:FastifyReply){
        send(
            await baseService.base(request),
            reply
        )
    }
}

export const baseController = new BaseController()