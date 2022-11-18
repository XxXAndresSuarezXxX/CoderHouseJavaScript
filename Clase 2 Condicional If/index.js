/*let numero1 = 5
let numero2 = 6

const resultado = numero1 + numero2
console.log(resultado)

//condicionales//

if (numero2 == 6 ){
    console.log("Numero igual a 6")
}
else{
    console.log("Numero distinto de 6")
}
// Ejemplo 2
const nombre = prompt("Ingresa tu Nombre...")

//.tolowercase() indiferentemente de como escriba Alan mayusca miniscula etc//

if(nombre.toLowerCase() =="Alan"){
    alert("Bienvenido Alan")
    console.log("Bienvenido Alan")
}
else{
    alert("No eres bienvenido a esta cuenta")
}
*/
/*
const seguirComprando = prompt("Quieres seguir comprando?")

if(seguirComprando == "Si"){
    alert("Escoge el siguiente producto")
}
else{
    alert("Este es el total de tu compra")
}
*/

const numero1 = parseInt(prompt("Ingrese un numero"))
const numero2 = parseInt(prompt("Ingrese otro numero"))
const operacion = prompt ("Que opercacion desea hacer? mult-rest-sum-div")
let resultado

if (operacion ==="sum"){
    resultado= numero1 + numero2
}
else if(operacion === "rest"){
    resultado = numero1 - numero2
 }
 else if(operacion ==="mult"){
    resultado= numero1 * numero2
 }
 else{
    resultado = numero1 / numero2
 }
 alert("El resultado de tu operacion es: " + resultado)