const express = require('express');
const app = express();
const ejs = require('ejs');
const http = require('http')
const server = http.createServer(app);
const path = require('path')

app.set('view engine','ejs');
app.set('views', './views')
app.use(express.static(path.join(__dirname,'views')));

//env setting
require('dotenv').config();
const port = process.env.port||8000;


app.get('/',(req,res) => {
    res.render('index');
})


app.get('/main',(req,res) => {
    res.render('main');
})



server.listen(port, () => {
    console.log(`Server running at http://:${port}/`);
  });