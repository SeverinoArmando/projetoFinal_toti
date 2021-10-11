const mongoose = require('mongoose');

const Prato = mongoose.model('Prato')

//get all
exports.todosPratos =async (req,res)=>{
    try{
        const Pratos_Cadastrados = await Prato.find().populate("usuario");

        return res.status(302).send({Pratos_Cadastrados})
    }catch(erro){
        return res.status(404).send({erro:"Nenhum prato encontrado... cadastre algum!"})
    }
}
 

//get by id

exports.buscarId = async (req,res)=>{

 
    try{
        const Pratos = await Prato.findOne({"_id":req.params.PratoId}).populate("usuario")

        res.status(302).send({Pratos})
    }catch(erro){
        res.status(404).send({erro:"Prato não encontrado! Tente novamente..."})
    }
}

//criando o nosso post

exports.cadastrar =(req,res)=>{
    let inserir = new Prato(req.body)

    inserir.save((erro,cadastrado)=>{
        if(erro){
            res.status(406).send({erro :"Não Aceite! Tente novamente"})
        }
        else{
            res.status(201).json({cadastrado})
        }
    }
    )
}

//criando o put/atualizar

exports.atualizar = (req,res)=>{
        Prato.findOneAndUpdate({_id:req.params.PratoId}, req.body,{new:true}, (erro,conteudo)=>{
            if(erro){
                res.status(404).send({erro:"Não foi possível encontrar o prato Cadastrado"})
            }
            else{
                res.status(202).json("Prato atualizado com Sucesso... ")
            }
        })
}

//delete

exports.deletar = (req,res)=>{
    Prato.deleteOne({_id:req.params.PratoId},(erro,conteudo)=>{
        if(erro){
            res.status(304).send({erro:"Não foi possível eliminar o prato identificado"})
        }else{
            res.status(200).json("Prato eliminado com sucesso")
        }
    })
}