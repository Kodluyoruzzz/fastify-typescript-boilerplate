import baseRoutes from "./routes/BaseRoutes";
import {FastifyInstance} from "fastify";

const routers =
    [
        baseRoutes
    ]
class Router {

    public prepareRoutes(fastify:FastifyInstance){
        routers.forEach((route) => {
            fastify.register(route)
        })

    }
}
export const router = new Router()
