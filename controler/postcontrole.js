const Postmodel = require('../model/postmodel')
class Postcontroler {
    listar(request,response){
        const dados = Postmodel.listar()
        return response.json(dados)
    }
    constudarid(request,response){
        const id = request.params.id
        const dados = Postmodel.constudarid(id)
        return response.json(dados)
    }
    criar(request,response){
        const body = request.body
        Postmodel.criar(body)
        return response.status(200).json({
            messege : 'Usuário cadastrado com sucesso'
        })
    }
    atualizar(request,response){
        const body = request.body
        const id = request.params.id
        Postmodel.atualizar(id,body)
        return response.json({
            message : "Usuario atualizado com sucesso"
        })
    }
    deletar(request,response){
        const id = request.params.id
        Postmodel.deletar(id)
        return response.json({
            message : "usuário removido com sucesso"
        })
    }
}
module.exports = Postcontroler