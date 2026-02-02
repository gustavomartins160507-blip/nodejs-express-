const express = require('express')
const usuarios = require('./users')
const app = express()
const host = "localhost"
const port = 3001
app.use(express.json())
app.get('/',(request,response) =>{
    return response.send("Olá, seja bem-vindo ao server em express")
})
app.get('/teste',(request,response) =>{
    return response.send("rotas de teste")
})
app.use(usuarios)
app.listen(port,host, () =>{
    console.log(`servidor executando http://${host}:${port}`)
})
