let nota = prompt("Digite a sua nota:");
nota = parseFloat(nota);

if (nota < 6) {
    console.log("Reprovado");
} else if (nota >= 6 && nota < 8) {
    console.log("Aprovado");
} else if (nota >= 8) {
    console.log("Aprovado com louvor");
}