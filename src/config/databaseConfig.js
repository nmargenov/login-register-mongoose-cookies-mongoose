const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/usersProject'

async function connectToDb(){
    mongoose.connect(uri);
}

module.exports = connectToDb;