
const UserType = ` type User{
    id:ID!
    fullName:String!
    username:String!
    password:String!,
    role:String!
    membership:Membership
}`;
module.exports = UserType;