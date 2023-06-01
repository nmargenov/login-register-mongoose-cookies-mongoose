const router = require('express').Router();

router.get('/',(req,res)=>{
    res.status(301).render('index');
});

router.get('/login',(req,res)=>{
    res.status(301).render('login');
});

router.get('/register',(req,res)=>{
    res.status(301).render('register');
});

module.exports = router;