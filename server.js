require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema=require('./schemas/schema');
const resolvers=require('./resolvers');
const connectToDB = require('./config/db');

const app = express();

connectToDB();

app.use('/graphql',graphqlHTTP({
  schema,
  rootValue:resolvers,
  graphiql:true
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})