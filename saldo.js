let saldo= prompt("Insira aqui o seu saldo inicial");
let compra= prompt("Insira aqui o valor da sua compra");
let saldoAtual= (saldo-compra);

if (compra <= saldo){
    alert(`Sua compra ocorreu corretamente. Seu saldo atual é de R$ ${saldoAtual}.`)
} else if (compra > saldo){
    alert(`Saldo insuficiente`)
}