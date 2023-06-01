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

    const newUser = User.create(user);
    
    return user
} 

async function login(username,password){
    const user = await User.findOne({username});
    if(!username){
        return new Error('This username doesn\'t exist!');
    }
    
    const isValid = await bcrypt.compare(password,user.password);

    if(!isValid){
        return new Error('Username or password don\'t match!');
    }

    return user;
}

module.exports = {register,login};