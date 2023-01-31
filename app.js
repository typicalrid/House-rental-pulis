const express =  require('express');
const path    =  require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

const app = express();
const uri = 'mongodb+srv://admin1:admin1@houserentalpulis.sdzsx4c.mongodb.net/?retryWrites=true&w=majority'

app.set('view engine', 'ejs');
app.set('views', 'views');

//own module
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: false
    })
  );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(userRouter);
app.use("/admin" ,adminRouter);

app.listen(3000, () => console.log("Server is Running..."));