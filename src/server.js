require('express')()
.get("/", (req, res) => {
    return res.send("Hi from NLW")

})

.get("/study", (req, res) => {
    return res.send("Pagina study")
})

.listen(5500)