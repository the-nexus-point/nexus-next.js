import mongoose from "mongoose";

const codechefSchema = new mongoose.Schema({
  codechefId: String,
  success: Boolean,
  profileUrl: String,
  username: String,
  currentRating: Number,
  highestRating: Number,
  countryFlag: String,
  countryName: String,
  globalRank: Number,
  countryRank: Number,
  stars: Number,
});

export default Codechef = mongoose.model("Codechef", codechefSchema);
