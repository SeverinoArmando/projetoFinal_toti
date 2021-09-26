const mongoose = require('mongoose');

const Prato = mongoose.model('Prato')

//get all
exports.todosPratos = (req,res)=>{
    Prato.find({},(erro,conteudo)=>{
        if(erro){
            return res.status(400).json(erro)
        }
        else{
            res.status(200).json(conteudo)
        }
    })
}
 
//get by id

exports.buscarId = (req,res)=>{
    Prato.findOne({_id:req.params.PratoId},(erro,conteudo)=>{
        if(erro){
            res.send(erro)
        }
        else{
            res.json(conteudo)
        }
    })
}

exports.buscarIngred = (req,res)=>{
    ingred = req.param.ingred
    ingred = "milho"
    Prato.find({ ingredientes: { "$in": [ingred]}},(erro,conteudo)=>{
    //Prato.find({ ingredientes: /*req.params.ingred*/ ingred },(erro,conteudo)=>{
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
    let inserir = new Prato(req.body)

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
        Prato.findOneAndUpdate({_id:req.params.PratoId}, req.body,{new:true}, (erro,conteudo)=>{
            if(erro){
                res.send(erro)
            }
            else{
                res.json(conteudo)
            }
        })
}

//delete

exports.deletar = (req,res)=>{
    Prato.deleteOne({_id:req.params.PratoId},(erro,conteudo)=>{
        if(erro){
            res.send(erro)
        }else{
            res.json("Prato eliminado com sucesso")
        }
    })
}