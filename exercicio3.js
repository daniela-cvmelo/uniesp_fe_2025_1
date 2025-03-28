// •Crie um array com 5 nomes e exiba o terceiro nome no console.

let nomes = ["Daniela", "Alvino", "Munna", "Maria", "Joaquim"];
console.log(nomes[2]);

// •Adicione um nome ao final e um no início do array.

nomes.push("Elisa");
nomes.unshift("Lua");
console.log(nomes);

// •Remova o último nome e exiba o array atualizado.

nomes.pop();
console.log(nomes);

// •Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8].

let numeros = [2, 4, 6, 8];
let resultado = numeros.map(numeros => numeros*2);
console.log(resultado);


// •Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]

let numeros2 = [1, 3, 5, 7, 9];
let filtro = numeros2.filter(numeros2 => numeros2 > 5);
console.log(filtro);


