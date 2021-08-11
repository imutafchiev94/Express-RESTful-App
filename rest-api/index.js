const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/softuni-movies', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`DB Connected`);
});

const routes = require('./routes');

//const cors = require('./middlewares/cors');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/api', routes);

app.listen(5000, console.log.bind(console, 'Server is listening on port 5000...'));