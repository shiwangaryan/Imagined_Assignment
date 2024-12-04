import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
});

UserSchema.index({ email: 1 }); // sorting by email for fetching user

const User = mongoose.model("User", UserSchema);
export default User;
