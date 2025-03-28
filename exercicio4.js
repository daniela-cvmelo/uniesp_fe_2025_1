// Crie uma função chamada calcularTotal que receba:

// •O preço unitário de um produto.
// •A quantidade comprada.

function calcularTotal(preco, quantidadeComprada) {
    return preco * quantidadeComprada;

}

// Calcule o valor total da compra.

preco = parseFloat(prompt("Digite o preço do produto:"));
quantidadeComprada = parseFloat(prompt("Digite a quantidade comprada:"));
valorTotal = calcularTotal(preco, quantidadeComprada);
console.log(valorTotal);
// Crie outra função chamada aplicarDesconto que receba o valor total e retorne o valor com desconto, conforme a regra:

// •Compras acima de R$ 100,00 → 10% de desconto
// •Compras até R$ 100,00 → sem desconto

let valorDescontado = aplicarDesconto(valorTotal);

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        console.log("Desconto de 10%");
        return valorTotal - (valorTotal * 0.1);    
    }else {
        console.log("Valor sem desconto");
    }
}

// Adicione uma função exibirResumo() que formate e exiba um resumo final da compra.

function exibirResumo() {
    console.log("O valor do produto é R$: "+ preco + "\nO valor total que você irá pagar é de R$" + valorDescontado);
}

exibirResumo();

// •Valor total antes do desconto.
// •Valor final com o desconto aplicado.

// OBS: Use prompt() para ler os dados do usuário (preço e quantidade).