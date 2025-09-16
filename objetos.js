// Criando objetos
let carro = {
    cor: "Amarelo",
    marca: "Chevrolet",
    modelo: "Camaro",
    ano: 2010,
    Velocidade: 0,
    freiar: 0,
    acelerar: function (valor) {
        if (valor >= 0) {
            this.Velocidade += valor
        } else {
            console.log("Valor inválido")
        }
    }



}

     


console.log(carro.modelo)
carro.acelerar(100)
console.log(carro.Velocidade)

