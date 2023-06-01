const router = require('express').Router();

router.get('/',(req,res)=>{
    res.write("Server is working properly");
    res.end();
});


module.exports = router;