const { validSession, logout } = require('../managers/authorizationManager');
const { register, login } = require('../managers/userManager');
const { assureUserIsLogged, assureUserIsNotLogged } = require('../middlewares/middlewares');


const router = require('express').Router();


router.get('/',(req,res)=>{
    res.status(301).render('index');
});

router.get('/profile',assureUserIsLogged, (req,res)=>{
    const {username,email,id} = req.user;
    res.status(301).render('profile',{username,email,id});
});

router.get('/login',assureUserIsNotLogged, (req,res)=>{
    res.status(301).render('login');
});

router.post('/login',async (req,res)=>{
    const username = req.body.username.trim();
    const password = req.body.password.trim();

    try{
        const user = await login(username,password)
        if(user instanceof Error){
            throw user;
        }
        res.cookie('userInfo',user);
        res.redirect('/profile');
    }catch(err){
        res.redirect('/login');
    }
});

router.get('/register',assureUserIsNotLogged, (req,res)=>{
    res.status(301).render('register');
});

router.post('/register',async (req,res)=>{
    const username = req.body.username.trim();
    const email = req.body.email.trim();
    const password = req.body.password.trim();
    const rePassword = req.body.rePassword.trim();

    try{
        const user = await register(username,email,password,rePassword)
        if(user instanceof Error){
            throw user;
        }
        res.redirect('/profile');
    }catch(err){
        res.redirect('/register');
    }
});

router.get('/logout',assureUserIsLogged,(req,res)=>{
    logout(res);
});

module.exports = router;