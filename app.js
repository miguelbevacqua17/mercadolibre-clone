const express = require('express');
const path = require('path');
const css = require('css');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/registro', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});


app.use(express.static((__dirname + '../public')));

app.use(express.static(__dirname +'../views'));  


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})


/*
app.listen(3020, () => {
    console.log("Servidor corriendo");
});
*/