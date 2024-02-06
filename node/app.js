var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

mongoose.connect('mongodb+srv://cluster0.xvygl4d.mongodb.net/Vanguardia')
  .then(() =>
   {
    console.log("Conectado!");
    const Schema = mongoose.Schema;
    
    // const LibreriaSchema = new Schema({
    //   id: { type: Number, required: true, unique: true },
    //   nombre:  { type: String, required: true },
    //   author:  { type: String , required: true},
    //   num_pag: { type: Number, required: true},
    //   fecha_publi: { type: Date , required: true},
    //   editorial: { type: String, required: true },
    //   ISBN:{ type: Number, required: true},
    //   genero:{ type: String , required: true},
    //   comentarios:{ type: String, required: true },
    //   edicion: { type: String , required: true},
    // });

    // const Libro = mongoose.model('Libros', LibreriaSchema);
   
   
   }
   

   
  );

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
