let vetor = [10, 25, 8, 56, 39];
let maior = vetor[0];

for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
    }
}

console.log("O maior número do vetor é: " + maior);
