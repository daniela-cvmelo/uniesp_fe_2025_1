let numFeminino = 0;
let somaAlturaMasculino = 0;
let countMasculino = 0;
let maiorAltura = 0;
let menorAltura = Infinity;

for (let i = 0; i < 15; i++) {
    let altura = parseFloat(prompt("Digite a altura (em metros):"));
    let genero = prompt("Digite o gênero (M/F):");
    
    if (genero === "F") {
        numFeminino++;
    } else if (genero === "M") {
        somaAlturaMasculino += altura;
        countMasculino++;
    }
    
    if (altura > maiorAltura) {
        maiorAltura = altura;
    }
    if (altura < menorAltura) {
        menorAltura = altura;
    }
}

let mediaAlturaMasculino = countMasculino > 0 ? (somaAlturaMasculino / countMasculino).toFixed(2) : 0;

console.log("A) Número de mulheres:", numFeminino);
console.log("B) Média de altura dos homens:", mediaAlturaMasculino, "m");
console.log("C) Maior altura:", maiorAltura.toFixed(2), "m");
console.log("   Menor altura:", menorAltura.toFixed(2), "m");
