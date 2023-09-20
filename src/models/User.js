import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  firstname: String,
  lastname: String,
  profile: {
    avatarUrl: String,
    bio: String,
    website: String,
    techStack: [String],
  },
  media: {
    upvote: Number,
    downvote: Number,
    post: Number,
    comment: Number,
  },
  challenges: {
    codechef: { type: mongoose.Schema.Types.ObjectId, ref: "Challenge" }, // Reference to the Challenge model
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
