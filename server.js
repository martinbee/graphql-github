import express from 'express';
//import graphqlHTTP from 'express-graphql';
import GraphQLHTTP from 'express-graphql';
import schema from './data/schema';

const server = express();
const PORT = process.env.PORT || 3000;

server.use(
  '/graphql',
  GraphQLHTTP({ schema, graphiql: true }),
);

server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
