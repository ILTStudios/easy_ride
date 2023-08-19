//express server
const express = require('express');
const express_app = express();

const mongoose = require('mongoose');
const body_parser = require('body-parser');

//set express settings
express_app.use(express.urlencoded({
    extended: true,
}));
express_app.set('port', 4000);
express_app.get('port');
express_app.use(body_parser.json());
express_app.use(body_parser.urlencoded({
    extended: true,
}));

//mongoDB
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

