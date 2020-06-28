
const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

// Iniciando o app
const app = express() 

//permitir que eu envie dados para minha aplicação em formato de json
app.use(express.json())

//usando cors 
app.use(cors())

//iniciando o database
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
})


requireDir('./src/models')

// rotas
app.use('/', require('./src/routes'))



app.listen(3000)





//----------------------------------- //
// npm install express

/*npm install nodemon -D => alterações automaticas
    "start": "nodemon server.js"

*/

// docker start mongodb

/* npm install mongoose 

ORM => Object relational mapping
*/

//Faz o requires em todos os arquivos automaticamente
/*
    npm install require-dir 
    require('./src/models/Product')
*/

// npm install mongoose-paginate