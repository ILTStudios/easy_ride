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

express_app.listen(4000, () => {
    console.log("Server is Listening to Port: 4000");
});

//mongoDB
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://iltstudios:iltstudios@fjord.kqqq4ms.mongodb.net/')
var db = mongoose.connection;

db.on('error', () => console.log('Mongoose had trouble connecting'));
db.once('open', () => console.log('Connection Successful'));

var user_schema = new Schema({
    email: String,
    password: String,
});

var easyride = mongoose.models.user || mongoose.model('users', user_schema);
easyride.find({}, (err, data) => {
    if(err){console.log(err)}
    else{
        console.log(data);
    }
});
express_app.get('/', (req, res) => {
    console.log('beans')
    easyride.find({}, (err, data) => {
        if(err){console.log(err)}
        else{
            console.log(data);
        }
    });
});