import mysql2 from 'mysql2';
import {ProjectSettings} from "../constant/ProjectSettings";


class DatabaseHelper {
    private static sInstance: DatabaseHelper;
    public connection: any;
    constructor() {
        this.connect();
    }

    public static getInstance(): DatabaseHelper {
        if (!DatabaseHelper.sInstance) {
            DatabaseHelper.sInstance = new DatabaseHelper();
        }
        return DatabaseHelper.sInstance;
    }



    public connect(){
        try {
            this.connection = mysql2.createPool({
                port: ProjectSettings.getDatabasePort(),
                host: ProjectSettings.getDatabaseHost(),
                user: ProjectSettings.getDatabaseUser(),
                password: ProjectSettings.getDatabasePassword(),
                database: ProjectSettings.getDatabaseName(),
                connectionLimit: ProjectSettings.CONNECTION_LIMIT,
                connectTimeout : ProjectSettings.CONNECTION_TIMEOUT,
                waitForConnections: true,
                stringifyObjects: true,
            }).promise();
            console.log("🟢 Database Connection");
        } catch (error) {
            console.error('[DatabaseHelper][Connection][Error]:', error);
            throw new Error('failed to initialized Pool')
        }
    };
}

export default DatabaseHelper;