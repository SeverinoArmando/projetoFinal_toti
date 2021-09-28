module.exports = (app) => {
    var prato = require('../controller/prato')
    var restaurante = require('../controller/restaurante')


    //trabalhando na rota padrao
    app.route('/prato')
        .get(prato.todosPratos)
        .post(prato.cadastrar)

    //Buscando pelo Id
    app.route('/prato/:PratoId')
        .get(prato.buscarId)
        .put(prato.atualizar)
        .delete(prato.deletar)

    app.route('/prato/ingrediente/:ingred')
        .get(prato.buscarIngred)


    app.route('/restaurante')
        .get(restaurante.todosRestaurantes)
        .post(restaurante.cadastrar)

    //Buscando pelo id
    app.route('/restaurante/:idRest')
        .get(restaurante.buscarId)
        .put(restaurante.atualizar)
        .delete(restaurante.deletar)


    app.route('/restaurante/:idRestaurante/prato/:prato')
    .get(prato.buscarPratos)
}   