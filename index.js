const express = require('express');
const app = express();
const port = 5000;
const controller = require('./src/controller/weather.controller');

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views','./ejs');

const welcomepage = (req,res)=>{
    res.render('display');
}

app.get('/',welcomepage);
app.get('/weather',controller.WeatherReport);
app.post('/weather',controller.WeatherReport);

app.listen(port);