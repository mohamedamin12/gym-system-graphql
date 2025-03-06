const QuerySchema = `type Query{
  getUsers:[User]
  getMemberships:[Membership]
  getTrainers:[Trainer]
  getUser(username:String!):User
}`;

module.exports = QuerySchema;