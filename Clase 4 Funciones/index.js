/*function sumarSinParametros(){
    let numero1 = parseInt(prompt("Ingrese el primer número..."));
    let numero2 = parseInt(prompt("Ingrese el primer número..."));
    let resultado = numero1 + numero2;
    alert(`El resultado de tu suma es: ${resultado}`);
}

sumarNumeros();
*/




/*
function sumarConParametros(parametro1, parametro2){
    let suma=  parametro1 + parametro2;
    alert(`La suma es de ${suma}}`);
}
sumarConParametros(10,20);
*/


/*
function sumaConRetorno(p1, p2){
    let resultado = p1+p2;
    return resultado;
}
let numero1= parseInt(prompt("Ingresa el primer numero"));
let numero2= parseInt(prompt("Ingresa el segundo numero"));

let resultadoSuma = sumaConRetorno(numero1, numero2)
console.log(resultadoSuma)
alert(`El resultado de tu suma es ${resultadoSuma}`)
*/







/*
function suma(p1, p2){
    let resultado = p1 + p2;
    return resultado;
}
function resta(p1, p2){
    let resultado = p1 - p2;
    return resultado;
    }
function multiplicacion(p1, p2){
    let resultado = p1 * p2;
    return resultado;
    }
function division(p1, p2){
    let resultado = p1 / p2;
    return resultado;
    }

    function calculadora(p1, p2, operacion){
        let resultado
        if(operacion === "suma"){
            resultado = suma(p1,p2)
        }else if(operacion ==="resta"){
            resultado = resta(p1,p2)
        }else if(operacion === "multiplicacion"){
            resultado = multiplicacion(p1,p2)
        }else if(operacion=== "division"){
        resultado = division(p1, p2)
        }
        return resultado
    }


let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let oper = prompt("Que operacion deseas realizar? suma - resta - multiplicacion - division");

const resultadoCalculadora = calculadora(numero1, numero2, oper);
alert(`El resultado de tu operacion es ${resultadoCalculadora}`);

*/