const mongoose = require('mongoose');

const Cadastro = mongoose.model('Cadastro')

//get all
exports.todosCadastros = async(req,res)=>{
    try{
        const Empresas_Cadastradas = await Cadastro.find();

        return res.status(302).send({Empresas_Cadastradas})

    }catch(erro){

        return res.status(404).send({erro})
    }
}
 

//get by id
exports.buscarId =(req,res)=>{

    // try{
    //     const Usuario = await Cadastro.findOne({"_id":req.params.CadastroId});

    //     res.status(304).send({Usuario})
    // }catch(erro){
    //     res.status(404).send({erro})
    // }
    const Usuario =  Cadastro.findOne({"_id":req.params.CadastroId},(erro,Empresa_Cadastrada)=>{
        if(erro){
            res.status(404).json(erro)
        }
        else{
            res.status(302).send({Empresa_Cadastrada})
        }
    })
}

//criando o nosso post

exports.cadastrar =(req,res)=>{
    let inserir = new Cadastro(req.body)

    inserir.save((erro,conteudo)=>{
        if(erro){
            res.status(400).json(erro)
        }
        else{
            res.status(201).json(conteudo)
        }
    })
}

//criando o put/atualizar

exports.atualizar = (req,res)=>{
        Cadastro.findOneAndUpdate({_id:req.params.CadastroId}, req.body,{new:true}, (erro,conteudo)=>{
            if(erro){
                res.status(400).send(erro)
            }
            else{
                res.status(201).json({conteudo})
            }
        })
}

//delete

exports.deletar = (req,res)=>{
    Cadastro.deleteOne({_id:req.params.CadastroId},(erro,conteudo)=>{
        if(erro){
            res.status(400).send(erro)
        }else{
            res.status(202).json("Cadastro eliminado com sucesso")
        }
    })
}