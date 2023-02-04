import IORedis from 'ioredis';
import {ProjectSettings} from "../constant/ProjectSettings";


const redisHost = process.env.REDIS_URL

class RedisManager{

    public redis!: IORedis;

    constructor(){
        if (!this.redis){
            this.connect()
        }
    }

    async connect(): Promise<void>
    {
        const redisClient = new IORedis({
            port: ProjectSettings.getRedisPort(), // Redis port
            host: ProjectSettings.getRedisHost(), // Redis host
            username: ProjectSettings.getRedisUser(), // needs Redis >= 6
            password: ProjectSettings.getRedisPassword(),
            db: 0, // Defaults to 0
        })
        await redisClient.connect()
        redisClient.on('ready', this.readyHandler)
        redisClient.on('error', this.errorHandler)
        this.redis = redisClient
    }

    async readyHandler(): Promise<void>
    {
        console.log('Redis is ready')
    }

    async errorHandler(error:Error): Promise<void>
    {
        console.error(error)
    }

    async getAllData(): Promise<Object>
    {
        const keys: any = await this.redis.keys('*')
        const result: any = {}

        const values = await this.redis.mget(keys)

        keys.forEach((key:string, index:number) => {
            result[key] = values[index]
        })

        return result
    }

    async getData(key: string): Promise<string | null>
    {
        return await this.redis.get(key)
    }

    async setData(key: string, value: string): Promise<void>
    {
        await this.redis.set(key, value)
    }

    async deleteData(key: string): Promise<void>
    {
        await this.redis.del(key)
    }
}

export default RedisManager