const userResolvers = require('./userResolvers');
const membershipResolvers = require('./membershipResolvers');
const trainerResolvers = require('./trainerResolvers');

const resolvers = {
  ...userResolvers,
  ...membershipResolvers,
  ...trainerResolvers,
};

module.exports = resolvers;