// Procurar o botao 
    document.querySelector("#add-time")

    // Quando clicar no botao 

    .addEventListener('click', clonefield)


// Executar uma acao 

    function clonefield() {
        

    // Duplicar os campos
    
     const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)// boolian: true ou false

     //Pegar os campos. Que campos?

        const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar  

    fields.forEach(function(field) {

        //pega o field do momento  e limpa ele 

        field.value =  ""
    })

    // Colocar na pagina 
    document.querySelector("#schedule-items").appendChild(newFieldContainer)

}