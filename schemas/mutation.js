const Mutation = `
  type Mutation {
    createMembership(type: String!, price: Float!, duration: Int!): Membership
    createTrainer(name: String!, specialization: String!, experience: Int!): Trainer
    registerUser(fullName:String!, username: String!, password: String!): User
    login(username: String!, password: String!): String
  }
`;

module.exports = Mutation;