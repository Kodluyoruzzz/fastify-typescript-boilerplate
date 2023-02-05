import baseRoutes from "./routes/BaseRoutes";
import {FastifyInstance} from "fastify";

const routes =
    [
        baseRoutes
    ]
class Router {

    public prepareRoutes(fastify:FastifyInstance){
        routes.forEach((route) => {
            fastify.register(route)
        })

    }
}
export const router = new Router()
