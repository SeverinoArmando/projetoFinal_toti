const mongoose = require('mongoose');
const restaurante = require('../model/restaurante');

const Restaurante = mongoose.model('Restaurante')

//get all
exports.todosRestaurantes= (req,res)=>{
    Restaurante.find({},(erro,conteudo)=>{
        if(erro){
            return res.status(400).json(erro)
        }
        else {
            res.status(200).json(conteudo)
        }
    })
}
 


exports.buscarId = (req,res)=>{
    restaurante.findOne({"idRest":req.params.idRest},(erro,conteudo)=>{
        if(erro){
            res.send(erro)
        }
        else{
            res.json(conteudo)
        }
    })
}

//criando o nosso post

exports.cadastrar =(req,res)=>{
    let inserir = new Restaurante(req.body)

    inserir.save((erro,conteudo)=>{
        if(erro){
            res.send(erro)
        }
        else{
            res.json(conteudo)
        }
    })
}

//criando o put/atualizar

exports.atualizar = (req,res)=>{
        Restaurante.findOneAndUpdate({_id:req.params.idRest}, req.body,{new:true}, (erro,conteudo)=>{
            if(erro){
                res.send(erro)
            }
            else{
                res.json(conteudo)
            }
        })
}

exports.deletar = (req,res)=>{
    Restaurante.deleteOne({_id:req.params.idRest},(erro,conteudo)=>{
        if(erro){
            res.send(erro)
        }else{
            res.json("Restaurante excluido com sucesso")
        }
    })
}