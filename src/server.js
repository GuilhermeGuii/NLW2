 //Dados
 
 const proffys = [
     {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", 
        whatsapp: "8999154541", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject: "Química",
        cost:"20",   
        weekday: [0],
        time_from:[120], 
        time_to:[1220] 
    },

     {
        name: "Mayke Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatsapp: "8999354541", 
        bio: 'Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar. Comecei a minha jornada profissional em 2001, quando meu pai me deu dois altares de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"',
        subject: "Educação Física",
        cost:"40",   
        weekday: [1],
        time_from:[720], 
        time_to:[1220] 
    },
    {
        name: "Mayke Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatsapp: "8999354541", 
        bio: 'Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar. Comecei a minha jornada profissional em 2001, quando meu pai me deu dois altares de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"',
        subject: "Educação Física",
        cost:"40",   
        weekday: [1],
        time_from:[720], 
        time_to:[1220] 
    }
 ]
 
 const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matematica",
    "Português",
    "Química",
 ]

 const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
 ]

 //Funcionalidades
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]

}

 function pageLending (req, res) {
    return res.render("index.html")
}
 
 function pageStudy (req, res) {
     const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})     
}

function pageGiveClasses (req, res) {
    const data = req.query


    //se tiver dados (data)
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) { 
        data.subject = getSubject(data.subject) 
    //adicionar a lista de proffys
    proffys.push(data)

    return res.redirect("/study")
}
    //se não, mostrar a página 
    return res.render("give-classes.html", {subjects, weekdays})
}
//Servidor
 const express = require('express')
 const server = express()

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