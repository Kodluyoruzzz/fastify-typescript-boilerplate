export namespace Client {
    export enum type {
        NOTIFICATION_CLIENT = "notification_client",

    }
    export interface IGet {
        url:string,
        config?:object
    }

    export interface IPut {
        url:string,
        config : {},
        data: {}
    }

    export interface IPost {
        url:string,
        config?: {},
        data: {}
    }


    export interface IDelete {
        url:string,
        config?: {}
    }



}