import mongoose from "mongoose";

const challengeSchema = new mongoose.Schema({
  name: String,
  description: String,
  participants: Number,
  date: Date,
  codechef: { type: mongoose.Schema.Types.ObjectId, ref: "Codechef" }, // Reference to the Codechef model
});

export default Challenge = mongoose.model("Challenge", challengeSchema);