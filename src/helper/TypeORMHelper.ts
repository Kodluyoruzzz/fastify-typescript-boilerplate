import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { ProjectSettings } from "../constant/ProjectSettings";

export class TypeORMHelper {
    private mConnection!: Connection;
    private static sInstance: TypeORMHelper;
    constructor(){
        this.connect()

    }


    public static getInstance(): TypeORMHelper {
        if (!TypeORMHelper.sInstance) {
            TypeORMHelper.sInstance = new TypeORMHelper();
        }
        return TypeORMHelper.sInstance;
    }


    public async connect(){
        try{
            console.log("Connecting to database: " + ProjectSettings.getDatabaseHost() + ":" + ProjectSettings.getDatabasePort());
            const connectionOptions: ConnectionOptions = this.prepareConnectionOptions();
            this.mConnection = await createConnection(connectionOptions);
            if (this.mConnection) {
                console.log('Connected to database successfully');
                if (ProjectSettings.DATABASE_DROP_ENABLED) {
                    this.drop();
                }
                return true;
            }
        } catch (error) {
            console.log('Could not connect to the database, reason:' + error);
            return false;
        }
    }

    public async close() {
        await this.mConnection.close();
    }

    private prepareConnectionOptions(): ConnectionOptions {
        const type: any = ProjectSettings.DATABASE_TYPE;
        const options = {
            type: type,
            host: ProjectSettings.getDatabaseHost(),
            port: ProjectSettings.getDatabasePort(),
            username: ProjectSettings.getDatabaseUser(),
            password: ProjectSettings.getDatabasePassword(),
            database: ProjectSettings.getDatabaseName(),
            entities: [__dirname+ '/../model/entity/*{.ts,.js}'],
            synchronize: ProjectSettings.DATABASE_SYNC_ENABLED,
            charset: "utf8mb4",
            collation: "utf8mb4_general_ci",
            autoSchemaSync: true,
            logging: false,
            cache: false,
        };
        return options;
    }

    private drop() {
        console.log("Database dropping");
        this.mConnection.dropDatabase();
    }

}
export default TypeORMHelper