require('dotenv').config();
const express = require('express');
const schema=require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');
const app = express();

app.use(express.json())

app.use('/graphql',graphqlHTTP({
  schema,
  rootValue:resolvers,
  graphiql:true
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})