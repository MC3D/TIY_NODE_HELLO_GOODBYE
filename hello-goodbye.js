const express = require('express');
const app = express();

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

app.get('/hello', function(req, res) {
  res.send('Hello there!');
});

app.get('/goodbye', function(req, res) {
  res.send('See you later!');
});

app.get('/hello/:name', function(req, res){
  var msg = 'Hello there, ' + capitalize(req.params.name) + '!';
  res.send(msg);
});

app.listen(3000, function() {
  console.log("Successfully started express application!");
});
