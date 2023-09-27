//express server
const express = require('express');
const express_app = express();
const path = require('path');
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
express_app.use(express.static(__dirname + '/public'));
express_app.use(express.urlencoded({
  extended: true,
}));


express_app.listen(4000, () => {
    console.log("Server is Listening to Port: 4000");
});

//mongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://iltstudios:iltstudios@fjord.kqqq4ms.mongodb.net/easy_ride?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    var users = await client.db().collection('users').find().toArray();
    console.log(users);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

express_app.get('/', function(req, res) {
  console.log('');
});

express_app.post('/signin', function (req, res) {
  console.log(req.body);
  res.sendFile(__dirname + '/src/app/sign_in/sign-in.component.html')
});