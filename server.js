var express = require('express');
const PORT = process.env.PORT || 3000;

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port' + PORT);
});
