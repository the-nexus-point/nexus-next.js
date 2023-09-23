import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  name: String,
  profile: {
    avatarUrl: String,
    bio: String,
    website: String,
    techStack: [String],
  },
  media: {
    upvotes: Number,
    downvotes: Number,
    posts: Number,
  },
  challenges: {
    codechef: { type: mongoose.Schema.Types.ObjectId, ref: "Challenge" }, // Reference to the Challenge model
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
