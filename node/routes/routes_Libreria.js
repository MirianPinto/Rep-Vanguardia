var express = require('express');
var router = express.Router();
const LireriaController = require("../controllers/controller_Libreria")



//libros
router.post("/addBook", LireriaController.CreateLibro);
router.get("/getBook", LireriaController.ReadLibro);
router.delete("/deleteBook", LireriaController.DeleteLibro);

router.put("/updateBook", LireriaController.UpdateLibro);


//estanteria

router.post("/addEstanterias", LireriaController.CreateLibro);
router.get("/getEstanterias", LireriaController.ReadLibro);
router.delete("/deleteEstanteria", LireriaController.DeleteLibro);
router.put("/updateBook", LireriaController.UpdateLibro);



module.exports = router;