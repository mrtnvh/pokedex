// import { IncomingMessage, ServerResponse } from 'http'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './schema'

const path = process.env.GRAPHQL_PATH || '/graphql'
const server = new ApolloServer({ typeDefs, resolvers })

export default server.getMiddleware({ path })
