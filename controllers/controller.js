var path = require('path');

const controller = {}

var lista = [
    {
      "id": 1,
      "nome": "Notebook Lenovo",
      "descrição":"Notebook Lenovo Ideapad 3i Intel Celeron 4GB 128GB",
      "qdade": "55",
      "valor": "1952"
    },
    {
    "id": 2,
    "nome": "Impressora Epson",
    "descrição":"Impressora Multifuncional Epson Ecotank L3250 - Tanque de Tinta Colorida USB Wi-Fi",
    "qdade": "32",
    "valor": "1169"
  },
  {
    "id": 3,
    "nome": "Notebook Acer",
    "descrição":"Notebook Gamer Acer AMD Ryzen R7-5800H 8GB - 512GB SSD 15,6” Full HD NVIDIA GTX 1650 4GB",
    "qdade": "23",
    "valor": "4499"
  },
  ]

controller.cadastrar = (req,res)=>{ 
    res.status(200).sendFile(path.resolve(__dirname+"/../views/cadastro.html"))
} 

controller.getAll = (req,res)=>{
    res.status(200).send(lista)
}

controller.getById = (req,res)=>{
    item = lista.find(i => i.id == req.params.id)
  
    if(item){
      res.status(200).send(item)
    } else{
      res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
    }
  }

controller.create = (req,res)=>{
    lista.push(req.body)
    res.status(200).redirect("/")
}

controller.update = (req,res)=>{
    console.log(req.body)
    lista[req.params.id-1] = req.body
    res.status(200).send("OK")
}

controller.delete = (req,res)=>{
    lista.splice(req.params.id-1,1)
    res.status(200).send("OK")
}

module.exports = controller