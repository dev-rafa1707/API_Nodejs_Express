const express = require("express")
const rotas = require("./routes/rotas")

const servidor = express()
servidor.use(express.json())
servidor.use(express.urlencoded({extended:true}))
servidor.use(rotas)
const PORTA = 3000

servidor.listen(PORTA,()=>{
    console.log("Servidor executando na porta "+PORTA)
})