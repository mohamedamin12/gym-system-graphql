const Trainer = require("../models/trainerModel");


const trainerResolvers = {
  getTrainers: async () => {
    return await Trainer.find();
  },
  createTrainer: async ({ name, specialization, experience }) => {
    const trainer = new Trainer({ name, specialization, experience });
    await trainer.save();
    return trainer;
  },
};

module.exports = trainerResolvers;