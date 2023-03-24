const express = require("express")
const controller = require("../controllers/controller")

const rotas = express.Router()
  
rotas.get("/cadastro",controller.cadastrar)

rotas.get("/",controller.getAll)
rotas.get("/:id",controller.getById)
rotas.post("/",controller.create)
rotas.put("/:id",controller.update)
rotas.delete("/:id",controller.delete)

module.exports = rotas