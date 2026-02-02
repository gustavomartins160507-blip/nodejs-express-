const Usuariosmodel = require('../model/usuariosmodel')
class Usuarioscontroler {
    listar(request,response){
        const dados = Usuariosmodel.listar()
        return response.json(dados)
    }
    constudarid(request,response){
        const id = request.params.id
        const dados = Usuariosmodel.constudarid(id)
        return response.json(dados)
    }
    criar(request,response){
        const body = request.body
        Usuariosmodel.criar(body)
        return response.status(200).json({
            messege : 'Usuário cadastrado com sucesso'
        })
    }
    atualizar(request,response){
        const body = request.body
        const id = request.params.id
        Usuariosmodel.atualizar(id,body)
        return response.json({
            message : "Usuario atualizado com sucesso"
        })
    }
    deletar(request,response){
        const id = request.params.id
        Usuariosmodel.deletar(id)
        return response.json({
            message : "usuário removido com sucesso"
        })
    }
}
module.exports = Usuarioscontroler