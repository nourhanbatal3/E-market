import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String

})
const User = mongoose.model("data",userSchema)
export default User ;// Use default export for a single model
