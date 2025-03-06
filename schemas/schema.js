const { buildSchema } = require("graphql");

const Membership = require("./types/membershipSchema");
const Trainer = require("./types/trainerSchema");
const User = require("./types/userSchema");
const Query = require("./queries");
const Mutation = require("./mutation");

const schema = buildSchema(`
${User}
${Trainer}
${Membership}
${Query}
${Mutation}
`);

module.exports = schema;