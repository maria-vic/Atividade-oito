let x= prompt("Digite aqui o valor de x :");
x= parseInt(x);
let y= prompt("Digite aqui o valor de y :");
y= parseInt(y);
let sinal= prompt("Digite a operação a ser efetuada : +  -  *  /");

let resultado1= (x+y);
let resultado2= (x-y);
let resultado3= (x*y);
let resultado4= (x/y);

if(sinal == "+"){
    alert(`${x} + ${y} =`);
    alert(`O resultado da operação é ${resultado1}`);
}
if(sinal == "-"){
    alert(`${x} - ${y} =`);
    alert(`O resultado da operação é ${resultado2}`);
}
if(sinal == "*"){
    alert(`${x} * ${y} =`);
    alert(`O resultado da operação é ${resultado3}`);
}
if(sinal == "/"){
    alert(`${x} / ${y} =`);
    alert(`O resultado da operação é ${resultado4}`);
}

