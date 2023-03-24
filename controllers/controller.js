var path = require('path');

const controller = {}

var lista = [
    {
      "id": 1,
      "nome": "João",
      "idade": 30,
      "cidade": "São Paulo"
    },
    {
      "id": 2,
      "nome": "Maria",
      "idade": 25,
      "cidade": "Rio de Janeiro"
    },
    {
      "id": 3,
      "nome": "Pedro",
      "idade": 40,
      "cidade": "Belo Horizonte"
    }
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