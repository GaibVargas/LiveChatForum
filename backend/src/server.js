require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(process.env.CONNECTION_LINK, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(express.json());
app.use(cors());
app.use(require('./routes'));

server.listen(3333);
