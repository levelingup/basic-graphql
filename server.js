const express = require("express");
const expressGraphQL = require("express-graphql");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(1234, () => {
  console.log("Listening");
});
