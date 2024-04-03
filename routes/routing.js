const express = require("express");
const router = express.Router();
const userController = require("../controllers/form.js");  // vamos a usar la inf que exportamos en el archivo form.js

router.post("/", userController.createUser);

module.exports = router;
