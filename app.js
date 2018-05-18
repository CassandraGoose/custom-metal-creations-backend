var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var items = require('./routes/items')
var newItem = require('./routes/newItem')
var cookieParser = require('cookie-parser');
require('dotenv').config()

const cors = require('cors')
var authMiddleware = require('./auth/auth')
var app = express();

app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(cors())

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/users', users);
app.use('/items', items)
app.use('/new-item', authMiddleware.allowAccess, newItem)

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
