const express = require ('express');
// const { clear } = require('node:console');
const app = express();
const path = require('path');
// const animate = require('animate.min.css');


//Settings
app.set('port', 3489);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// app.use('animate');
//Middlewares


//Routes
app.use(require('./routes/index'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));


//Listening the server
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
});
