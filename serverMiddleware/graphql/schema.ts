import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
import { makeExecutableSchema } from 'apollo-server'
import GraphQLJSON from 'graphql-type-json'

import Query from './queries'
import Mutations from './mutations'
import BaseResponse from './types/baseResponse'
import BaseName from './types/baseName'
import Ability from './types/pokemon/ability'
import GameIndex from './types/pokemon/gameIndex'
import VersionDetail from './types/pokemon/versionDetail'
import HeldItem from './types/pokemon/heldItem'
import VersionGroupDetail from './types/pokemon/versionGroupDetail'
import Move from './types/pokemon/move'
import Sprite from './types/pokemon/sprite'
import Stat from './types/pokemon/stat'
import Type from './types/pokemon/type'
import Pokemon from './types/pokemon/pokemon'
import PokemonItem from './types/pokemonItem'
import PokemonList from './types/pokemonList'

export const typeDefs = [
  BaseResponse,
  Ability,
  GameIndex,
  VersionDetail,
  HeldItem,
  VersionGroupDetail,
  Move,
  Sprite,
  Stat,
  Type,
  BaseName,
  Pokemon,
  PokemonItem,
  PokemonList,
  Query,
  Mutations
].map(({ typeDef }) => (typeDef as unknown) as DocumentNode)

export const resolvers = {
  JSON: GraphQLJSON,
  Query: Query.resolvers,
  Mutation: Mutations.resolvers
}

const augmentedTypeDefs = Array.isArray(typeDefs) ? typeDefs : [typeDefs]

// We augment the typeDefs with the @cacheControl directive and associated
// scope enum, so makeExecutableSchema won't fail SDL validation
augmentedTypeDefs.push(
  gql`
    enum CacheControlScope {
      PUBLIC
      PRIVATE
    }
    directive @cacheControl(
      maxAge: Int
      scope: CacheControlScope
    ) on FIELD_DEFINITION | OBJECT | INTERFACE
  `
)

augmentedTypeDefs.push(gql`
  scalar JSON
`)

export const executableSchema = makeExecutableSchema({
  typeDefs: augmentedTypeDefs,
  resolvers
})
