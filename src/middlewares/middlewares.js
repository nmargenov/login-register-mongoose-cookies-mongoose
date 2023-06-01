const { validSession, logout } = require("../managers/authorizationManager");

const setNoCacheHeaders = (req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    next();
};


const assureUserIsLogged = async (req,res,next) =>{
    const token = req.cookies['userInfo'];
    try{
        const user = await validSession(token);
        req.user = user
        next();
    }catch(err){
        return res.redirect('/login');
    }
}

const assureUserIsNotLogged = async (req,res,next) =>{
    const token = req.cookies['userInfo'];
    try{
        const user = await validSession(token);
        return res.redirect('/profile');
    }catch(err){
        next();
    }
}

module.exports = {setNoCacheHeaders,assureUserIsLogged,assureUserIsNotLogged};
  