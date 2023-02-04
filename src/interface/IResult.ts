export interface IResult {
    statusCode?:number,
    status:boolean,
    data: any,
    error : Error | object | any
}