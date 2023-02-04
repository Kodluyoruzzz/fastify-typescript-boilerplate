

export const resolvers = {
    Query: {
        //@ts-ignore
        hello : (parent,args,context) => {
            return 'Hello Graphql'
        }
    }
}