import Fastify, { FastifyInstance} from 'fastify'
import FastifySwagger from '@fastify/swagger'
import FastifySwaggerUI from '@fastify/swagger-ui'
import FastifyJWT from '@fastify/jwt'
import FastifyCors from '@fastify/cors'
import Mercurius from 'mercurius'
import {router} from './Router'
import {ProjectSettings} from "./constant/ProjectSettings";
import pino from "pino";
import {schema} from "./graphql/GraphqlSchema";
import {resolvers} from "./graphql/GraphqlResolver";
import {middleware} from "./middleware/Token";
import {pinoConfig} from "./constant/PinoConfig";
import DatabaseHelper from "./helper/DatabaseHelper";

class App {
    public fastify!: FastifyInstance

    constructor() {
        this.initialize()
    }

    public async initialize() {
        try {
            await this.connectDatabase().then(async () => {
                this.fastify = Fastify({logger: pino(pinoConfig)})
                this.prepareUses()
                await this.startServer()
            })
        } catch (error) {
            console.error(error)

        }
    }

    public async connectDatabase() {
        const databaseHelper = new DatabaseHelper();
    }

    public prepareUses() {
        this.fastify.register(FastifySwagger)
        this.fastify.register(FastifySwaggerUI)
        this.fastify.register(FastifyCors, {
            allowedHeaders: ['Content-Type', 'Authorization'],
            origin: ["*"],
            methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
            credentials: true,
            hideOptionsRoute: false
        })
        //graphql
        this.fastify.register(Mercurius, {
            schema,
            resolvers
        })
        this.fastify.register(FastifyJWT, {
            secret: ProjectSettings.JWT_SECRET_KEY!
        })
        //static token
        middleware.token(this.fastify)


        router.prepareRoutes(this.fastify)

    }

    public async startServer() {
        await this.fastify.listen({
            port: ProjectSettings.getPort(),
            host: ProjectSettings.getHost(),
        }, (error, address) => {
            if (error) {
                console.log(error);
            }
            console.log(`${this.fastify.printRoutes({commonPrefix: false})} \n ${address}`)


        });
    }
}

export const app = new App();
//export const fastify = new App().fastify