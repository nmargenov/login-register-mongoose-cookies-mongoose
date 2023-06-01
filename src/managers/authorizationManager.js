const { verify, secret } = require("../utils/jwt");


async function validSession(token){
    try{
        const isValid = await verify(token,secret);
        return isValid;
    }catch(err){
        throw err;
    }
}

module.exports = {validSession};