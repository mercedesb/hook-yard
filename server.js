const express = require('express');
const cfGraphql = require('cf-graphql');
const graphqlHTTP = require('express-graphql');
const config = require('./config.json');

const port = process.env.PORT || 5000;
const spaceId = process.env.SPACE_ID || config.spaceId;
const cdaToken = process.env.CDA_TOKEN || config.cdaToken;
const cmaToken = process.env.CMA_TOKEN || config.cmaToken;

if (spaceId && cdaToken && cmaToken) {
  console.log('Space ID, CDA token and CMA token provided');
  console.log(`Fetching space (${spaceId}) content types to create a space graph`);
  useProvidedSpace();
} else {
  fail('Must provide Space ID, CDA token and CMA token')
}

// this function implements a flow you could use in your application:
// 1. fetch content types
// 2. prepare a space graph
// 3. create a schema out of the space graph
// 4. run a server
function useProvidedSpace () {
  const client = cfGraphql.createClient({spaceId, cdaToken, cmaToken});

  client.getContentTypes()
  .then(cfGraphql.prepareSpaceGraph)
  .then(spaceGraph => {
    const names = spaceGraph.map(ct => ct.names.type).join(', ');
    console.log(`Contentful content types prepared: ${names}`);
    return spaceGraph;
  })
  .then(cfGraphql.createSchema)
  .then(schema => startServer(client, schema))
  .catch(fail);
}

function startServer (client, schema) {
  const app = express();

  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

  app.use('/', graphqlHTTP({
    context: {entryLoader: client.createEntryLoader()},
    graphiql: true,
    schema,
  }));

  app.listen(port, () => console.log(`Running a GraphQL server, listening on port ${port}`));
}

function fail (err) {
  console.log(err);
  process.exit(1);
}