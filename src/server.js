const express = require('express');
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const router = require('./routes');
const connectToDb = require('./config/databaseConfig');

const app = express();

handlebarsConfig(app);
expressConfig(app);

connectToDb()
.then(()=>console.log('Connection to the database is successful!'))
.catch((err)=>console.log('Error connecting to the database: ',err));

app.use(router);


const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is working on PORT: ${PORT}...`));