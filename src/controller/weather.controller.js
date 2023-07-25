const { default: axios } = require("axios");
const dotenv = require("dotenv");
dotenv.config();

module.exports.WeatherReport = async(req,res)=>{
    try{
           let{city}=req.body;
           if(city === undefined){
            res.render('display');
           }
        console.log(city);
        let url= process.env.BASEURL+'q='+city+"&appid="+process.env.APP_ID
        let{data}=await axios.get(url);
        console.log('result',data);
        let temprature = Math.ceil(data.main.temp-273.15);
        let description = data.weather[0].description
        res.render("WeatherReport",{city,temprature,description});
    }
    catch(error){
        console.log('error is:'+error.message);
    }
} 