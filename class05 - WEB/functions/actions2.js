function somar(numero1, numero2) {
    resultado = numero1 + numero2;
    return resultado;
}
function multiplicação(numero1, numero2) {
    resultado = numero1 * numero2;
    return resultado;
}
function divisão(numero1, numero2) {
    resultado = numero1 / numero2;
    return resultado;
}
function sub(numero1, numero2) {
    resultado = numero1 - numero2;
    return resultado;
}

const options = prompt("Escolha uma operação: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão");


if (options == 1) {
    let number1 = parseInt(prompt("Digite o primeiro número: "));
    let number2 = parseInt(prompt("Digite o segundo número: "));
    alert(`O resultado da soma é: ${somar(number1, number2)}`);
} else if (options == 2) {
    let number1 = parseInt(prompt("Digite o primeiro número: "));
    let number2 = parseInt(prompt("Digite o segundo número: "));
    alert(`O resultado da subtração é: ${sub(number1, number2)}`);
} else if (options == 3) {
    let number1 = parseInt(prompt("Digite o primeiro número: "));
    let number2 = parseInt(prompt("Digite o segundo número: "));
    alert(`O resultado da multiplicação é: ${multiplicação(number1, number2)}`);
} else if (options == 4) {
    let number1 = parseInt(prompt("Digite o primeiro número: "));
    let number2 = parseInt(prompt("Digite o segundo número: "));
    alert(`O resultado da divisão é: ${divisão(number1, number2)}`);
}