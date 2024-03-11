const express =require('express')
const router = express.Router()
const {index} = require("../Controllers/home")

//establece rutas donde estab los controladores
router.use("/", index)

module.exports =router