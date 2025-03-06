const mongoose = require('mongoose');

const MembershipSchema = new mongoose.Schema({
  type: { type: String, required: true }, //  "monthly", "yearly"
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // duration in months
});

module.exports = mongoose.model('Membership', MembershipSchema);