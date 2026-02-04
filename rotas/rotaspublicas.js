const express = require('express')
const Authcontroller = require('../controler/authcontroller')
const jwt = require('jsonwebtoken')
const Rotaspublicas = express.Router()
Rotaspublicas.post('/login',(request,response) =>{
    const body = request.body
    const auth = new Authcontroller()
    const dados = auth.login(body.login, body.senha)
    if(dados){
        const token = jwt.sign(dados,'testetesteteste')
        return response.status(200).json({
            token: token
        })
    }
    else{
        return response.status(403).json({
            message: "Login ou senha incorretos"
        })
    }
})
module.exports = Rotaspublicas