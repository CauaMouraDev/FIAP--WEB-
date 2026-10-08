const verifyPar = (num) => {
     let inte = parseInt(num);

      if (inte % 2 == 0) {
         alert(`O número ${inte} é par`);
    }
     else {
          alert(`O número ${inte} é ímpar`);
    }
}


let number = prompt("Digite um número: ");

num = verifyPar(number);
alert(num);