var express = require('express');
var router = express.Router();

var axios = require("axios");

/* GET home page. */
router.get('/', async (req, res, next) =>{


  try {
    const options = {
        method: 'GET', 
        url: `https://jsonplaceholder.typicode.com/users`
    };

    var response = await axios.request(options);
    res.render('index', { title: response.data[1].name });
  } catch (e) {
      console.error("Error al obtener acciones:", e);
      
    res.render('index', { title: "NOU" });
  }  
  
  
});

module.exports = router;
