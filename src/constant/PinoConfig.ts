export const pinoConfig = {
    transport: {
        target: 'pino-pretty',
        options: {
            translateTime: "UTC:yyyy-mm-dd HH:MM",
            colorize: true,
            customColors: 'err:red,info:blue',
            singleLine:true
        }
    }
}