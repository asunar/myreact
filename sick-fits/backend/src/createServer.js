// GraphQL Yoga is an express server, built on express and apollo server
const { GraphQLServer } = require("graphql-yoga");

//resolvers: query and mutation resolver
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

const db = require("./db");

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql", //this file cannot be empty
    resolvers: {
      Mutation, //needs Mutation and Query types to resolve
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;
