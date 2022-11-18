/* for ("desde" tal numero empiezo a contar "hasta" tal otro numero)*/
/*
for (let i=1; i<=10; i=i+2){
    console.log(i)
}
*/


/*
const inicioContador = parseInt(prompt("Inicio Contador?"))
const finalContador = parseInt(prompt("Final contador"))

for(let i = inicioContador; i <= finalContador; i++){
    console.log(i)
}


*/

/*
let nombre =prompt("Ingrese nombre...")

while (nombre !== "Sebastian"){
    alert("Bienvenido");
    nombre = prompt("Ingresa tu nombre");
}
*/



/*
let numero = parseInt(prompt("Ingrese numero de..."))
while (numero < 10 || numero > 20) {
    alert("No es el numero correcto")
    numero = parseInt(prompt("Ingrese un numero"))

}
alert(`El numero ingresado es ${numero}`)   
*/

/*
let comentarioBoludo= parseInt(prompt("Ingrese el numero de comentarios boludos de Agustin"))

while(comentarioBoludo <= 2){
    if (comentarioBoludo < 2){
        alert("Cometario es muy boludo")
    }else{
        alert("Que es ESOOOOOOOOOO") 
    }
    comentarioBoludo++   
} 
*/








/*1.Iphone: 500
2.TV: 1000
3.Ipad: 200 
4.Computador: 800
*/
/*

let producto = prompt("Escoge el producto que desea comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador")
let totalCompra = 0
let seguirComprando= true
let decision

while(seguirComprando === true){
        if(producto===1){
            totalCompra= totalCompra + 500
        }else if(producto===2){
            totalCompra= totalCompra +1000
        }else if(producto===3){
            totalCompra= totalCompra + 200
        }else if (producto===4) {
            totalCompra= totalCompra + 800
        }else{
            producto = parseInt(prompt("Escoge unproducto habilitado 1.Iphone - 2.TV - 3.Ipad - 4.Computador"))
        }
}
decision= parseInt(prompt("Quieres seguir comprando? 1.Si - 2.No"))
if(decision===1){
    producto= parseInt(prompt("Escoge el producto que desea comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador"))
}else{
    seguirComprando= false
}

*/
