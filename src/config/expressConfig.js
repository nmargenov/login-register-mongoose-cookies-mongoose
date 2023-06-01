const express = require('express');
const cookieParser = require('cookie-parser');

function expressConfig(app) {
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.set('view engine','hbs');
    app.set('views','src/views');
}

module.exports = expressConfig;