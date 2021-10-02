const mongoose = require('mongoose');

const Cadastro = mongoose.model('Cadastro')

//get all
exports.todosCadastros = async(req,res)=>{
    try{
        const Empresas_Cadastradas = await Cadastro.find();

        return res.status(302).send({Empresas_Cadastradas})

    }catch(erro){

        return res.status(404).send({erro:"Dados não eoncontrado... tente Cadastrar algum!"})
    }
}
 

//get by id
exports.buscarId =(req,res)=>{

    const Usuario =  Cadastro.findOne({"_id":req.params.CadastroId},(erro,Empresa_Cadastrada)=>{
        if(erro){
            res.status(404).json({erro:"Cadastro não eoncontrado! Tente novamente..."})
        }
        else{
            res.status(302).send({Empresa_Cadastrada})
        }
    })
}

//criando o nosso post

exports.cadastrar =(req,res)=>{
    let inserir = new Cadastro(req.body)

    inserir.save((erro,cadastrado)=>{
        if(erro){
            res.status(400).json({erro:"Erro nos parâmetros! Tente novamente..."})
        }
        else{
            res.status(201).json({cadastrado})
        }
    })
}

//criando o put/atualizar

exports.atualizar = (req,res)=>{
        Cadastro.findOneAndUpdate({_id:req.params.CadastroId}, req.body,{new:true}, (erro,status)=>{
            if(erro){
                res.status(400).send({
                    erro: "Falha ao Atualizar o Cadastro... Tente novamente"
                })
            }
            else{
               return res.status(201).send({
                    status:"Cadastro Atualizado Com Sucesso"
                })
            }
        })
}

//delete

exports.deletar = (req,res)=>{
    Cadastro.deleteOne({_id:req.params.CadastroId},(erro,conteudo)=>{
        if(erro){
            res.status(400).send({erro:"Erro nos parâmetros! Tente novamente..."})
        }else{
            res.status(202).json("Cadastro eliminado com sucesso")
        }
    })
}