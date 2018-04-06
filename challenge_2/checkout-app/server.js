const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const dbHost = process.env.DATABASE_HOST || 'localhost';

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/build')));

MongoClient.connect(`mongodb://${dbHost}/`, (err, client) => {
  if (err) {
    throw err;
  } else {
    const db = client.db('checkout');
    const collection = db.collection('transactions');

    app.post('/createAccount', (req, res) => {
      const data = req.body;
      console.log('anything');
      console.log(req.body);

      collection.insertOne(data);
    });
  }
});


// app.get('/ping', (req, res) => res.send('pong'));

// app.get('/', (req, res) => {
//   res.send('hello');
// });

app.listen(process.env.PORT || 8001, () => console.log('express up and runnin at 8001'));
