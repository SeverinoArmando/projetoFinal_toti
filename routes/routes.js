module.exports = (app)=>{
    var prato = require('../controller/controlModel')
    var restaurante = require('../controller/restaurante')


    //trabalhando na rota padrao
    app.route('/')
        .get(prato.todosPratos)
        .post(prato.cadastrar)

    //Buscando pelo Id
    app.route('/prato/:PratoId')
        .get(prato.buscarId)
        .put(prato.atualizar)
        .delete(prato.deletar)

    app.route('/restaurante')
        .get(restaurante.todosRestaurantes)
        .post(restaurante.cadastrar)

    //Buscando pelo id
    app.route('/restaurante/:idRest')
        .get(restaurante.buscarId)
        .put(restaurante.atualizar)
        .delete(restaurante.deletar)
}   