import mongoose from "mongoose";
const userSchaema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true,
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchaema);

export default User;
