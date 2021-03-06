var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var items = require('./routes/items')
require('dotenv').config()

const cors = require('cors')
var app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/items', items)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500)

  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  })
})

app.listen(process.env.PORT || 3000)


module.exports = app;
