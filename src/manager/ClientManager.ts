// import axios from 'axios'
//
//
// class ClientManager {
//
//
//     public async
//
// }

import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { config } from "dotenv";
import {Client} from "../interface/Client";
import IGet = Client.IGet;
import IPut = Client.IPut;
import IPost = Client.IPost;
import IDelete = Client.IDelete;
import client = Client.type;
config();


class ClientManager {
    private client: AxiosInstance;
    private baseUrl?:string;
    private token?:string;
    constructor(type:string) {
        this.setClient(type)
        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                "Content-Type": "application/json",
                authorization: this.token || "",
            },
        });
    }


    public async GET(getConfig:IGet): Promise<AxiosResponse | undefined> {
        try {
            const { url, config = {} } = getConfig;
            const response: AxiosResponse = await this.client.get(url, config);

            return response;
        } catch (error) {
            console.log(error);
        }
    }

    public async PUT(putConfig:IPut): Promise<AxiosResponse | undefined> {
        try {
            const { url, config = {}, data } = putConfig;
            const response: AxiosResponse = await this.client.put(url,data,config);

            return response;
        } catch (error) {
            console.log(error);
        }
    }


    public async POST(postConfig:IPost): Promise<AxiosResponse | undefined> {
        try {
            const { url, config = {}, data } = postConfig;
            const response: AxiosResponse = await this.client.post(url,data,config);
            console.log(response)
            return response;
        } catch (error) {
            console.log(error);
        }
    }


    public async DELETE(deleteConfig:IDelete): Promise<AxiosResponse | undefined> {
        try {
            const { url, config = {} } = deleteConfig;
            const response: AxiosResponse = await this.client.delete(url, config);

            return response;
        } catch (error) {
            console.log(error);
        }
    }

    public setClient(type:string){
        switch (type) {
            case client.NOTIFICATION_CLIENT:
                this.token  = process.env.NOTIFICATION_SERVICE_TOKEN
                this.baseUrl = process.env.NOTIFICATION_SERVICE_URL
                break;

        }
    }
}

export default ClientManager