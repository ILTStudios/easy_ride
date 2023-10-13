//express server
const express = require('express');
const app = express();
const path = require('path');
const body_parser = require('body-parser');
const cors = require('cors');

//set express settings
app.use(express.urlencoded({
    extended: true,
}));
app.set('port', 4000);
app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: true,
}));
app.use(cors({origin: ['http://localhost:4200', 'http://localhost:4000']}))
app.listen(4000, () => {
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

var users; 
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    users = await client.db().collection('users').find().toArray();

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

async function insert_doc(document){
  try{
    await client.connect();
    await client.db().collection('users').insertOne(document);
  }finally{
    await client.close()
  }
}

async function get_data(){
  try{
    await client.connect();
    user_data = await client.db().collection('users').find({}).toArray();
    console.log(user_data);
    return user_data
  }finally{
    await client.close();
  }
}

app.get('/', function(req, res) {
  rando_data = {
    beans: 'beans',
    penis: 'duck',
  };
  res.json(rando_data);
});

app.post('/signin', function (req, res) {
  var user_name = req.body.username;
  var e_mail = req.body.email;
  var pass_word = req.body.password;
  var repass = req.body.pass;

  var new_user = {
    username: user_name,
    email: e_mail,
    password: pass_word,
  }

  if(pass_word == repass){
    insert_doc(new_user);
  }

  res.redirect('http://localhost:4200/explore');
});

app.post('/login', function (req, res) {
  var email = req.body.email;
  var pass = req.body.password;
  var authorized = false;

  users.forEach(element => {
    if(element.email == email && element.password == pass){
      authorized = true;
    }
  });

  if(authorized == true){
    res.redirect('http://localhost:4200/explore');
  }else{
    console.log('entry denied');
    res.redirect('http://localhost:4200/login');
  }
});


//websocket
const http = require('http');
const WebSocket = require('ws');

const server = http.createServer(app);
const wss = new WebSocket.Server({server});

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message); // Attempt to parse JSON data
      console.log('Received:', data);
    } catch (error) {
      console.error('Invalid JSON data:', message);
    }
  });

  async function beans (){
    try{
      await client.connect();
      user_data = await client.db().collection('users').find({}).toArray();
      console.log(user_data);
      ws.send(JSON.stringify(user_data));
      return user_data
    }finally{
      await client.close();
    }
  }

  beans();

  // users = async get_data();
  // console.log('hehe uwuw')
  // console.log(users);

  // ws.send(JSON.stringify({beans: 'beans', penis: 'penis'}));
});

server.listen(3000, () => {
  console.log('Web Socket is Listening on Port:3000');
});
