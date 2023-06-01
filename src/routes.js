const router = require('express').Router();

const homeController = require('./controllers/homeController');
const { setNoCacheHeaders } = require('./middlewares/middlewares');

router.use(setNoCacheHeaders);

router.use(homeController);
router.get('*',(req,res)=>{
    res.status(404).render('404');
});


module.exports = router;