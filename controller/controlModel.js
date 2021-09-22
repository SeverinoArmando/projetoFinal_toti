const mongoose = require("mongoose");
const Prato = require("../model/prato");

//get all
exports.todosPratos = (req, res) => {
    Prato.find({}, (erro, conteudo) => {
        if (erro) {
            return res.send(erro);
        } else {
            res.json(conteudo);
        }
    });
};

//get by id
exports.buscarId = (req, res) => {
    Prato.findOne({ _id: req.params.pratoId }, (erro, conteudo) => {
        if (erro) {
            res.send(erro);
        } else {
            res.json(conteudo);
        }
    });
};

//criando o nosso post
exports.cadastrar = (req, res) => {
    const prato = new Prato(req.body);

    prato.save((erro, conteudo) => {
        if (erro) {
            res.send(erro);
        } else {
            res.json(conteudo);
        }
    });
};

//criando o put/atualizar
exports.atualizar = (req, res) => {
    Prato.findOneAndUpdate(
        { _id: req.params.pratoId },
        req.body,
        { new: true },
        (erro, conteudo) => {
            if (erro) {
                res.send(erro);
            } else {
                res.json(conteudo);
            }
        }
    );
};

//delete
exports.deletar = (req, res) => {
    Prato.deleteOne({ _id: req.params.pratoId }, (erro, conteudo) => {
        if (erro) {
            res.send(erro);
        } else {
            res.json("Prato eliminado com sucesso");
        }
    });
};
