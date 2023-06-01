const jtw = require('jsonwebtoken');

function sign(payload,secret,options){
    return new Promise((resolve,reject)=>{
        jtw.sign(payload,secret,options,(err,token)=>{
            if(err){
                reject(new Error('Error'));
            }else{
                resolve(token);
            }
        });
    });
}

module.exports = {sign};