// var nomeUsuario = prompt('Digite seu nome:');

// console.log("Nome do usuário -->", nomeUsuario);

// titulo = document.getElementById('titulo');
// titulo.innerHTML = `Olá ${nomeUsuario}, seja bem-vindo(a) ao curso de JavaScript!`;




// Part2
// ----------


// var num = prompt('Digite um número:');
// var valornme =  parseFloat(num);
// window.alert(`O número digitado foi: ${valornme + 10}`);

// var num2 = parseFloat(prompt('Digite outro número:'));
// window.alert(`O número digitado foi: ${num2 + 10}`);




// Part3
// ----------

var num1 = parseFloat(prompt('Digite um número:'));
var num2 = parseFloat(prompt('Digite outro número:'));

titulo = document.getElementById('titulo');

titulo.innerHTML = `<h1>A soma dos números é: ${num1 + num2}</h1>`;


window.alert(`A soma dos números é: ${num1 + num2}`);
window.alert(`A multiplicação dos números é: ${num1 * num2}`);