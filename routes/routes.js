module.exports = (app)=>{
    var prato = require('../controller/controlModel')
    var cliente = require('../controller/cliente')


    //trabalhando na rota padrao
    app.route('/')
        .get(prato.todosPratos)
        .post(prato.cadastrar)

    //Buscando pelo Id
    app.route('/prato/:PratoId')
        .get(prato.buscarId)
        .put(prato.atualizar)
        .delete(prato.deletar)

    app.route('/u')
        .get(cliente.todosClientes)
        .post(cliente.cadastrar)
 
}   