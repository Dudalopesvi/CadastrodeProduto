let nomes = []
let preços = []
let quantidades = []
let valortotal = []











function Cadastro() {

  


document.getElementById("teste").classList.remove("hidden")
//document.getElementById("tabelaa").classList.add("hidden")
document.getElementById("testando").classList.add("hidden")




}



function Salvar() {

    let nome = document.getElementById("nome")

    let preco = document.getElementById("preco")
    
    let quantidade = document.getElementById("quantidade")
    


    nomes.push(nome.value)
    preco.push(parseFloat(preco.value))
    
    quantidade.push(parseFloat(quantidade.value))
    
    
    let total = parseFloat(preco.value) * parseFloat(quantidade.value)
    valortotal.push(total)
    
    alert("Cadastro realizado com sucesso!")
}

function Cancelar (){

}