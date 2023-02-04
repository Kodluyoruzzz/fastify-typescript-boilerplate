import {FastifyRequest} from "fastify";

class BaseService {


    public async base(request:FastifyRequest){
        try {
            throw new Error('Bir hata oluşturuldu.')
            return {
                status:true,
                data : { message : 'Typescript Fastify Boilerplate'},
                error : null
            }
        }catch (error) {
            return {
                status: false,
                data : { message : 'Typescript Fastify Boilerplate'},
                error
            }
        }

    }
}

export const baseService = new BaseService()