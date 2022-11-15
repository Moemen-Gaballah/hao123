const express = require('express');
const path = require('path');

const app = express();

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', 'views') // default

const homeRouter = require('./routes/homeRoute')
const todoRouter = require('./routes/todoRoute')



app.use('/', homeRouter);

app.use('/todo', todoRouter);


app.use("/error", (req, res, next) => {
    res.status(500)
    res.render('404')
});


app.get((error, req, res, next) => {
    res.redirect('/error')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server listen on port 3000');
});
