
module.exports = (app) =>{
    const prato = require('../controller/controlModel')

    app.route('/pratos').get(prato.todosPratos)
        
    app.route('/pratos').post(prato.cadastrar)

    app.route('/pratos/:pratoId').get(prato.buscarId)

    app.route('/pratos/:pratoId').put(prato.atualizar)
    
    app.route('/pratos/:pratoId').delete(prato.deletar)
}