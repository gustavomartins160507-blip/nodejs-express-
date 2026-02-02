class Usuariosmodel {
    static lista = [
        {   id: 1,
            nome:'Gustavo',
            login: '1234'
        },
        {
            id: 2,
            nome: 'Gugashow',
            login:'testando json'
        }
    ]
    static listar(){
        return Usuariosmodel.lista
    }
    static constudarid(id){
        const dados = Usuariosmodel.lista.filter(item => item.id == id)
        return dados
    }
    static criar(data){
        Usuariosmodel.lista.push(data)
    }
    static atualizar(id,data){
        const indice = Usuariosmodel.lista.findIndex(item => item.id == id)
        Usuariosmodel.lista[indice] = data
    }
    static deletar(id){
        const dados = Usuariosmodel.lista.filter(item => item.id != id)
        Usuariosmodel.lista = dados
    }
}
module.exports = Usuariosmodel