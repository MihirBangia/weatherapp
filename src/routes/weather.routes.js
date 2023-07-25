const express = require('express');
const router =express.Router();
const weatherController = require('../controller/weather.controller');

router.post('/weather',weatherController.WeatherReport);


module.exports=router;