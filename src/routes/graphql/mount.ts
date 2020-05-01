import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

const rootValue = {
    hello: () => {
        return 'Hello world!'
    }
}

export default graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
})
