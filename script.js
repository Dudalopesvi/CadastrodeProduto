let nomes = []
let precos = []
let quantidades = []
let valortotal = []


function Cadastro() {


    document.getElementById("tabela").classList.add("hidden")
    document.getElementById("Cadastro").classList.remove("hidden")





}

function Salvar() {

    let nome = document.getElementById("nome")

    let preco = document.getElementById("preco")

    let quantidade = document.getElementById("quantidade")

   



    nomes.push(nome.value)
    precos.push(parseFloat(preco.value))

    quantidades.push(parseFloat(quantidade.value))


    let total = parseFloat(preco.value) * parseInt(quantidade.value)
    valortotal.push(total)

    alert("Cadastro realizado com sucesso!")
    mostrarTabela()
}

function mostrarTabela() {
    let corpotabela = document.getElementById("corpo");
    corpotabela.innerHTML = ""
    for (let i = 0; i < nomes.length; i++) {
        const linha = document.createElement("tr")
        linha.innerHTML = `
                <th>${nomes[i]}</th>
                <th>${precos[i]}</th>
                <th>${quantidades[i]}</th>
                <th>${valortotal[i]}</th> 
               <th> <button onclick="excluir(${i})">excluir</button></th> 
                `
        corpotabela.appendChild(linha)

        document.getElementById("tabela").classList.remove("hidden")
        document.getElementById("Cadastro").classList.add("hidden")
    }
}
function excluir(i){

   
    nomes.splice(i,1)
    precos.splice(i,1)
    quantidades.splice(i,1)
    valortotal.splice(i,1)

    mostrarTabela()
}



function Cancelar() {

}
