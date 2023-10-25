import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    // required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  profile: {
    avatarUrl: {
      type: String,
      // required: true,
    },
    bio: {
      type: String,
    },
    website: {
      type: String,
    },
    techStack: {
      type: [String],
    },
  },
  media: {
    upvotes: {
      type: Number,
    },
    downvotes: {
      type: Number,
    },
    posts: {
      type: Number,
    },
  },
  // challenges: {
  //   codechef: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Challenge",
  //     required: true,
  //   },
  // },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
