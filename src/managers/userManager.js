const User = require("../models/User");
const bcrypt = require('bcrypt');

async function register(username, email, password,rePassword){
    if(await User.findOne({username})){
        return new Error('This username is already in use!');
    }
    if(await User.findOne({email})){
        return new Error('This email is already in use!');
    }

    if(password != rePassword){
        return new Error('Passwords don\'t match!');
    }

    const salt = await bcrypt.genSalt(9);
    const hashPassword = await bcrypt.hash(password,salt);

    const user = {username,email,password:hashPassword};

    User.create(user);
} 

module.exports = {register};