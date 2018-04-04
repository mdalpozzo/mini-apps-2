const express = require('express');

const app = express();
const path = require('path');

const port = 8000;

app.use('/', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {});

app.listen(port, () => console.log(`What up big daddy... Your server's running on port ${port}, don't let it get away!`));
