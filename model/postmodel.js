class Postmodel {
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
        return Postmodel.lista
    }
    static constudarid(id){
        const dados = Postmodel.lista.filter(item => item.id == id)
        return dados
    }
    static criar(data){
        Postmodel.lista.push(data)
    }
    static atualizar(id,data){
        const indice = Postmodel.lista.findIndex(item => item.id == id)
        Postmodel.lista[indice] = data
    }
    static deletar(id){
        const dados = Postmodel.lista.filter(item => item.id != id)
        Postmodel.lista = dados
    }
}
module.exports = Postmodel