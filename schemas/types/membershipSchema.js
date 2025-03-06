const MembershipType = `
  type Membership {
    id: ID!
    type: String!
    price: Float!
    duration: Int!
  }
`;

module.exports = MembershipType;