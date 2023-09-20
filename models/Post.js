import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the User model
  content: String,
  upvotes: Number,
  downvotes: Number,
  comments: Number,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
