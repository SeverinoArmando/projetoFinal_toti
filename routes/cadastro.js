
module.exports = (app)=>{
    var cadastro = require('../controller/cadastroController')


    //trabalhando na rota padrao
    app.route('/cadastros')
        .get(cadastro.todosCadastros)
        .post(cadastro.cadastrar)

    //Buscando pelo Id
    app.route('/cadastros/:CadastroId')
        .get(cadastro.buscarId)
        .put(cadastro.atualizar)
        .delete(cadastro.deletar)
 
} 