const prompt = require("prompt-sync")()

let funcionários = []
for (let i = 0; i < 3; i++) {
    let nome = prompt("Digite o nome do funcionário: ")
    let cargo = prompt("Digite o cargo: ")
    let salario = parseFloat(prompt("Digite seu salario: "))

    let funcionário = {
        nome: nome,
        cargo: cargo,
        salario: salario,
        aumentarSalario: function(porcentagem){
            this.salario = this.salario + valor
            console.log("Aumento de salario concedido") 
        }
            


    }

    funcionários.push(funcionário)

}

for (let i = 0; i <funcionários.length;i++){
    console.log(`${i+1}: ${funcionários[i].nome}, Salario: R$ ${funcionários[i].salario}`)
}

let num = parseInt(prompt("Digite o numero do funcionário que você quer da um aumento"))
funcionários[num-1].aumentarSalario(250)