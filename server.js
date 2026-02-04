const express = require('express')
const usuarios = require('./users')
const rotasprivadas = require('./rotas/rotasprivadas')
const Rotaspublicas = require('./rotas/rotaspublicas')
const app = express()
const host = "localhost"
const port = 3001
app.use(express.json())
app.get('/',(request,response) =>{
    return response.send("Olá, seja bem-vindo ao server em express")
})
app.get('/teste/:codigo',(request,response) =>{
    const query = request.query
    let dados = "query: " + query.nome + " "
    const params = request.params
    dados += "params: " + params.codigo
    const body = request.body
    dados += "body: " + JSON.stringify(body)
    return response.send(dados)
})
app.use(Rotaspublicas)
app.use(rotasprivadas)
app.listen(port,host, () =>{
    console.log(`servidor executando http://${host}:${port}`)
})
