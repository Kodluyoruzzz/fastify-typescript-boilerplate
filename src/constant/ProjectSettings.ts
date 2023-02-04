import {config} from "dotenv";
import * as process from "process";

config();
export abstract class ProjectSettings {
    public static readonly IS_PROD               = parseInt(process.env.PRODUCTION!);


    public static readonly DATABASE_TYPE         = "mysql";
    public static readonly DATABASE_SYNC_ENABLED = true;
    public static readonly DATABASE_DROP_ENABLED = false;
    public static readonly IS_CRON_SERVER        = true;


    public static readonly CONNECTION_LIMIT       = 150;
    public static readonly CONNECTION_TIMEOUT     = 60 * 1000;
    public static readonly ACQUIRE_TIMEOUT        = 10 * 1000;
    public static readonly TIMEOUT                = 3 * 60 * 1000;

    public static readonly JWT_SECRET_KEY         = process.env.JWT_SECRET_KEY;


    public static readonly DATABASE_HOST_PROD     = process.env.DATABASE_HOST_PROD;
    public static readonly DATABASE_PORT_PROD     = process.env.DATABASE_PORT_PROD;
    public static readonly DATABASE_NAME_PROD     = process.env.DATABASE_NAME_PROD;
    public static readonly DATABASE_USER_PROD     = process.env.DATABASE_USER_PROD;
    public static readonly DATABASE_PASSWORD_PROD = process.env.DATABASE_PASSWORD_PROD;
    public static readonly PORT_PROD              = process.env.PORT_PROD;
    public static readonly HOST_PROD              = process.env.HOST_PROD;

    public static readonly DATABASE_HOST_DEV      = process.env.DATABASE_HOST_DEV;
    public static readonly DATABASE_PORT_DEV      = process.env.DATABASE_PORT_DEV;
    public static readonly DATABASE_NAME_DEV      = process.env.DATABASE_NAME_DEV;
    public static readonly DATABASE_USER_DEV      = process.env.DATABASE_USER_DEV;
    public static readonly DATABASE_PASSWORD_DEV  = process.env.DATABASE_PASSWORD_DEV;
    public static readonly PORT_DEV               = process.env.PORT_DEV;
    public static readonly HOST_DEV               = process.env.HOST_DEV;


    public static readonly REDIS_HOST_PROD        = process.env.REDIS_HOST_PROD;
    public static readonly REDIS_PORT_PROD        = process.env.REDIS_PORT_PROD;
    public static readonly REDIS_USER_PROD        = process.env.REDIS_USER_PROD;
    public static readonly REDIS_PASSWORD_PROD    = process.env.REDIS_PASSWORD_PROD;

    public static readonly REDIS_HOST_DEV         = process.env.REDIS_HOST_DEV;
    public static readonly REDIS_PORT_DEV         = process.env.REDIS_PORT_DEV;
    public static readonly REDIS_USER_DEV         = process.env.REDIS_USER_DEV;
    public static readonly REDIS_PASSWORD_DEV     = process.env.REDIS_PASSWORD_DEV;



    public static readonly TOKEN                  = process.env.TOKEN;


    // public static readonly ROUTE_PREFIX = "/api/v1";


    public static getPort(): number {
        return parseInt(this.IS_PROD ? this.PORT_PROD! : this.PORT_DEV!);
    }

    public static getHost(): string {
        return this.IS_PROD! ? this.HOST_PROD! : this.HOST_DEV!;
    }

    public static getDatabaseHost(): string {
        return this.IS_PROD ? this.DATABASE_HOST_PROD! : this.DATABASE_HOST_DEV!;
    }
    public static getDatabasePort():number {
        return parseInt(this.IS_PROD ? this.DATABASE_PORT_PROD! : this.DATABASE_PORT_DEV!);
    }

    public static getDatabaseName(): string {
        return this.IS_PROD ? this.DATABASE_NAME_PROD! : this.DATABASE_NAME_DEV!;
    }

    public static getDatabaseUser(): string {
        return this.IS_PROD ? this.DATABASE_USER_PROD! : this.DATABASE_USER_DEV!;
    }

    public static getDatabasePassword(): string {
        return this.IS_PROD ? this.DATABASE_PASSWORD_PROD! : this.DATABASE_PASSWORD_DEV!;
    }

    public static getRedisPort():number {
        return parseInt(this.IS_PROD ? this.REDIS_PORT_PROD! : this.REDIS_PORT_DEV!);
    }

    public static getRedisHost():string {
        return this.IS_PROD ? this.REDIS_HOST_PROD! : this.REDIS_HOST_DEV!
    }

    public static getRedisUser():string {
        return this.IS_PROD ? this.REDIS_USER_PROD! : this.REDIS_USER_DEV!
    }

    public static getRedisPassword():string {
        return this.IS_PROD ? this.REDIS_PASSWORD_PROD! : this.REDIS_PASSWORD_DEV!
    }

}
