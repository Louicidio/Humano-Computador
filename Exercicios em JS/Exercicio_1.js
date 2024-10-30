let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (num1 > num2) {
    console.log("O maior número é: " + num1);
} else if (num2 > num1) {
    console.log("O maior número é: " + num2);
} else {
    console.log("Os dois números são iguais.");
}
