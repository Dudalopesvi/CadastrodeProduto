
const prompt = require("prompt-sync")()

let alugueis = []

let quantidademaxima = parseInt(prompt("quantos quartos você quer alugar?"))

for (let i = 0; i < quantidademaxima; i++) {

    let quarto = prompt("Qual quarto você escolheu?")
    if (ocupado(quarto)) {
        console.log("Quarto ocupado tente outroo")
        i--
    } else {
        let nome = prompt("Qual seu nomee?")
        let email = prompt("Qual o seu email?")

        let aluguel = {
            nome: nome,
            email: email,
            quarto: quarto,
        }
    }



    aluguel.push(alugueis)


}

console.log("Quartos ocupados")

function ocupado(quarto) {

    for (let i = 0; i < alugueis.length; i++) {
        if (alugueis[i].quarto == quarto) {
            return true
        }

    }
    return false
}