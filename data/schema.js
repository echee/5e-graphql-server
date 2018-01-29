import fs from 'fs';
import path from 'path';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import resolverMap from './resolverMap';
import resolvers from './resolvers';

const myGraphQLSchema = fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8");

// @TODO set up mocks
import mocks from './mocks'
// const mocks = {
//   String: () => 'Test String'
// };

// @TODO load the schema
const schema = makeExecutableSchema({ typeDefs: myGraphQLSchema, resolvers: resolvers});

// This will mock data
// addMockFunctionsToSchema({ schema, mocks });

export default schema;
