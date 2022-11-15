const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
const homeRouter = require('./routes/homeRoute')

app.set('view engine', 'ejs');
app.set('views', 'views') // default

app.use('/', homeRouter);


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
