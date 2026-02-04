const express = require('express')
const Usuariosrotas = require('../users')
const postrotas = require('../rotas/postrotas')
const rotasprivadas = express.Router()
const jwt = require('jsonwebtoken')
rotasprivadas.use((request,response,next)=>{
    let auth = false
    if(request.headers.token){
        const {token} = request.headers
        try{
        jwt.verify(token,'testetesteteste')
        auth = true
        }
        catch(e){
            return response.status(403).send(e)
        }
        if(auth === false){
            return response.status(404).json('Nao autorizado')
        }
    next()
}
}
)
rotasprivadas.use(Usuariosrotas)
rotasprivadas.use(postrotas)
module.exports = rotasprivadas