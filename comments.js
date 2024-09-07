// Create a web server
// Access: http://localhost:3000/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/comments', (req, res) => {
  fs.readFile(__dirname + '/comments.json', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let comments = JSON.parse(data);
      res.json(comments);
    }
  });
});