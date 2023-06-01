const User = require("../models/User");
const bcrypt = require('bcrypt');
const { sign, secret } = require("../utils/jwt");

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
    
    return newUser;
} 

async function login(username,password){
    const user = await User.findOne({username});

    if(!user){
        return new Error('This username doesn\'t exist!');
    }
    
    const isValid = await bcrypt.compare(password,user?.password);

    if(!isValid){
        return new Error('Username or password don\'t match!');
    }

    const payload = {
        id:user._id,
        username:user.username,
        email:user.email
    }

    const token = await sign(payload,secret,{expiresIn:'2d'});

    return token;
}

module.exports = {register,login};