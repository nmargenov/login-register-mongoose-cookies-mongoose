const { verify, secret } = require("../utils/jwt");

async function validSession(token){
    try{
        const isValid = await verify(token,secret);
        return isValid;
    }catch(err){
        throw err;
    }
}

function logout(res){
    res.clearCookie('userInfo');
}

module.exports = {validSession,logout};