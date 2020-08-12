 const proffys = [
     {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", 
        whatsapp: "8999154541", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
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
        bio: 'Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.<br><br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois altares de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"',
        subject: "Educação Física",
        cost:"40",   
        weekday: [1],
        time_from:[720], 
        time_to:[1220] 
    }
 ]
 

 function pageLending (req, res) {
    return res.sendFile(__dirname + "/views/index.html")
}
 
 function pageStudy (req, res) {
    return res.sendFile(__dirname + "/views/study.html")     
}

function pageGiveClasses (req, res) {
    return res.sendFile(__dirname + "/views/give-classes.html")
}

 const express = require('express')
 const server = express()
 
 server.use(express.static("public"))  

.get("/", pageLending)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)