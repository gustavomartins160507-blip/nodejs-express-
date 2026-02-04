const Usuariosmodel = require("../model/usuariosmodel");
class Authcontroller{
    login(login,senha){
        const dados = Usuariosmodel.autenticar(login, senha)
        return dados
    }
}
module.exports = Authcontroller