const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.write("Server is working properly");
    res.end();
});

const PORT = 5000;

app.listen(PORT,()=>console.log(`Server is working on PORT: ${PORT}...`));