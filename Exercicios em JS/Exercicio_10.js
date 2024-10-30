let matriz = [
    [5, 10, 15],
    [20, 25, 30]
];
let soma = 0;
let contador = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
        contador++;
    }
}

let media = soma / contador;
console.log("A média dos elementos da matriz é: " + media);