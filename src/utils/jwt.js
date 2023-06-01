const jtw = require('jsonwebtoken');

const secret = "thisIsTheSecretForThisProject123";


function sign(payload,secret,options){
    return new Promise((resolve,reject)=>{
        jtw.sign(payload,secret,options,(err,token)=>{
            if(err){
                return reject(err);
            }else{
                resolve(token);
            }
        });
    });
}

function verify(payload,secret){
    return new Promise((resolve,reject)=>{
        jtw.verify(payload,secret,(err,token)=>{
            if(err){
                return reject(err);
            }else{
                resolve(token);
            }
        });
    });
}

module.exports = {sign,verify,secret};