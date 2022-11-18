//Administrador

const numeros = []
let i = 1
while(i<=5){
    let numero = parseInt(prompt("Ingrese un numero"));
    numeros.push(numero);
    i++;
}
console.log(numeros)

//Cliente

const preguntaNumero = parseInt(prompt("Ingrese el numero que quieres averiguar"))
const index = numeros.indexOf(preguntaNumero)

if (index !== -1){
    alert(`El numero ingresado se encuentra en la posicion ${index} de ${numeros.length} en la lista`)
}else{
    alert("El numero ingresado no existe en la lista")
}
