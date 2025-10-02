let Produtos = []

function Cadastro() {

    document.getElementById("tabela").classList.add("hidden")
    document.getElementById("Cadastro").classList.remove("hidden")

}

function Salvar() {

    let nome = document.getElementById("nome")

    let preco = document.getElementById("preco")

    let quantidade = document.getElementById("quantidade")

   let produto = {
    nome: nome.value,
  preco: parseFloat(preco.value),
    quantidades: parseInt(quantidade.value),
    valortotal:parseFloat(preco.value) * parseInt(quantidade.value)
  }


 
    Produtos.push(produto);


    alert("Cadastro realizado com sucesso!")
    mostrarTabela()
}   

function mostrarTabela() {
    let corpotabela = document.getElementById("corpo");
    corpotabela.innerHTML = ""
    for (let i = 0; i < Produtos.length; i++) {
        const linha = document.createElement("tr")
        linha.innerHTML = `
                <th>${Produtos[i].nome}</th>
                <th>${Produtos[i].preco}</th>
                <th>${Produtos[i].quantidades}</th>
                <th>${Produtos[i].valortotal}</th> 
               <th> <button onclick="excluir(${i})">excluir</button></th> 
                `
        corpotabela.appendChild(linha)

        document.getElementById("tabela").classList.remove("hidden")
        document.getElementById("Cadastro").classList.add("hidden")
    }
}
function excluir(i){

   
    Produtos.splice(i,1)
  

    mostrarTabela()
}



function Cancelar() {

}
