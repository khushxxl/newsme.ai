import mongoose, { Schema } from "mongoose";
import User from "./User";

const audienceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    audienceName: {
      type: String,
    },
    subscribers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Audience =
  mongoose.models.Audience || mongoose.model("Audience", audienceSchema);

export default Audience;
