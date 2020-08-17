//Servidor
 const express = require('express')
 const server = express()
 const {
     pageLending, 
     pageStudy, 
     pageGiveClasses
    } = require('./pages')

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
 

//inicio  e configuração do servidor
 server
 //configurar arquivos estáticos  (css, scripts, imagens)
 server.use(express.static("public"))  
//rotas de aplicação
.get("/", pageLending)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)