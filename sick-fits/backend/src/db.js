// This files connects to the remote prisma DB and gives us the ability to query it with JS.

const { Prisma } = require("prisma-binding"); //why are we using require on the server...No import in node.js

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false //log queries in the console?
});

module.exports = db;
