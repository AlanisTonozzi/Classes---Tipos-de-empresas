const express = require('express') 
const utils = require('./utils.js')

const server = express() //cria servidor


server.use('/hi', (req,res) => {

})








server.listen(2000, () => console.log("servidor rodando na porta 2000"))
