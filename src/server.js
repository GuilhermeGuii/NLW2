//Servidor
 const express = require('express')
 const server = express()
 const {
     pageLending, 
     pageStudy, 
     pageGiveClasses,
     saveClasses
    } = require('./pages')

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
 

//inicio  e configuração do servidor
 server
 // receber os dados do req.body
 .use(express.urlencoded({ extended: true}))
 //configurar arquivos estáticos  (css, scripts, imagens)
 server.use(express.static("public"))  
//rotas de aplicação
.get("/", pageLending)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)