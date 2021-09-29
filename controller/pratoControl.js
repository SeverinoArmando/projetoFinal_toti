const mongoose = require('mongoose');

const Prato = mongoose.model('Prato')

//get all
exports.todosPratos =async (req,res)=>{
    try{
        const Pratos_Cadastrados = await Prato.find().populate("usuario");

        return res.status(302).send({Pratos_Cadastrados})
    }catch(erro){
        return res.status(404).send({erro})
    }
}
 

//get by id

exports.buscarId = async (req,res)=>{

    // Prato.findOne({"_id":req.params.PratoId},(erro,conteudo)=>{
    //     if(erro){
    //         res.status(404).send(erro)
    try{
        const Pratos = await Prato.findOne({"_id":req.params.PratoId}).populate("usuario")

        res.status(302).send({Pratos})
    }catch(erro){
        res.status(404).send({erro})
    }
    //     }
    //     else{
    //         res.status(302).json(conteudo)
    //     }
    // })
}

//criando o nosso post

exports.cadastrar =(req,res)=>{
    let inserir = new Prato(req.body)

    inserir.save((erro,conteudo)=>{
        if(erro){
            res.status(406).send({erro})
        }
        else{
            res.status(201).json({conteudo})
        }
    }
    )
}

//criando o put/atualizar

exports.atualizar = (req,res)=>{
        Prato.findOneAndUpdate({_id:req.params.PratoId}, req.body,{new:true}, (erro,conteudo)=>{
            if(erro){
                res.status(404).send(erro)
            }
            else{
                res.status(202).json("Prato atualizado com Sucess... ")
            }
        })
}

//delete

exports.deletar = (req,res)=>{
    Prato.deleteOne({_id:req.params.PratoId},(erro,conteudo)=>{
        if(erro){
            res.status(304).send(erro)
        }else{
            res.status(200).json("Prato eliminado com sucesso")
        }
    })
}