var express = require('express');
var router = express.Router();
var axios = require("axios");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`Hello ${process.env.WEATHER_API}`)
});

router.get('/Weather', async (req, res, next) => {

    try {
    const options = {
        method: 'GET', 
        url: `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.WEATHER_API}`
    };

    var response = await axios.request(options);
    console.log(response.data)
    res.send(response.data);
  } catch (e) {
      console.error("Error al obtener acciones:", e);
      
      res.send(e)
  }  
    
  });
  

module.exports = router;
