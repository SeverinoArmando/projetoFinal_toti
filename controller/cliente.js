const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente')

//get all
exports.todosClientes= (req,res)=>{
    Cliente.find({},(erro,conteudo)=>{
        if(erro){
            return res.status(400).json(erro)
        }
        else {
            res.status(200).json(conteudo)
        }
    })
}
 

/*

exports.buscarId = (req,res)=>{
    Prato.findOne({"_id":req.params.PratoId},(erro,conteudo)=>{
        if(erro){
            res.send(erro)
        }
        else{
            res.json(conteudo)
        }
    })
}*/

//criando o nosso post

exports.cadastrar =(req,res)=>{
    let inserir = new Cliente(req.body)

    inserir.save((erro,conteudo)=>{
        if(erro){
            res.send(erro)
        }
        else{
            res.json(conteudo)
        }
    })
}

/*/criando o put/atualizar

exports.atualizar = (req,res)=>{
        Prato.findOneAndUpdate({_id:req.params.PratoId}, req.body,{new:true}, (erro,conteudo)=>{
            if(erro){
                res.send(erro)
            }
            else{
                res.json(conteudo)
            }
        })
}*/