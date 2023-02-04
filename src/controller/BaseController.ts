import {FastifyReply, FastifyRequest} from "fastify";
import {IResult} from "../interface/IResult";
import {IResponse} from "../interface/IResponse";
import {baseService} from "../service/BaseService";
import ClientManager from "../manager/ClientManager";
import {Client} from "../interface/Client";
import IPost = Client.IPost;


class BaseController {
    private discordClient:ClientManager;
    constructor() {
    this.discordClient = new ClientManager("notification_client")
    }
    public async send(result:IResult,reply:FastifyReply){
        const { statusCode, status, data, error } = result;
        const code:number = statusCode ?? (status ? 200 : 400 )
        const response : IResponse = {
            statusCode : code,
            status,
            data : status ? data : [],
            error : !status ? (error.message ?? null) : null
        }
        if (!status && error){
            const postConfig:IPost = {
                url : "/discord/send",
                config : {},
                data : {
                    channel_name: 'BASE',
                    message : error.message,
                    is_embed : false
                }
            }
             await this.discordClient.POST(postConfig);

        }
        reply.code(code).send(response);
    }

    public async base(request:FastifyRequest,reply:FastifyReply){
       await baseController.send(
            await baseService.base(request),
            reply
        )
    }
}

export const baseController = new BaseController()