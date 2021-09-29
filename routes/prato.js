
module.exports = (app)=>{
    var prato = require('../controller/pratoControl')


    //trabalhando na rota padrao
    app.route('/cardapio')
        .get(prato.todosPratos)
        .post(prato.cadastrar)

    //Buscando pelo Id
    app.route('/cardapio/:PratoId')
        .get(prato.buscarId)
        .put(prato.atualizar)
        .delete(prato.deletar)

} 