const mongoose  = require("mongoose");

const Userschema = mongoose.Schema({
    username: {
        type: String,
        required:[true, "Enter the username"]
    },
    password: {
        type: String,
        required:[true, "Enter your password"]
    }

},{
    timestamp: true
}
);

const User = mongoose.model("User", Userschema);
module.exports = User;
