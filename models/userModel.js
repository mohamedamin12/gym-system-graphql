const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: { type: String, required: true },

  role: {
    type: String,
    default: "member",
  },
  membership: { type: mongoose.Schema.Types.ObjectId, ref: "Membership" },
});

const User = mongoose.model("User", userSchema);
module.exports = User;