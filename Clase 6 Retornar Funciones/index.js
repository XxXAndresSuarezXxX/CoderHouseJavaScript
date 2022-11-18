function elevar(n){
    return function(m){
        return m ** n
    }
}

const cuadrado = elevar(2) //=> n= 2
const cubo = elevar(3)   //=> n = 3
const aLaCuatro = elevar(4)   //=>  n = 4


//elevar 2l 7

//console.log(cuadrado(7)) // m = 7
//console.log(cubo(7))  // m = 7
//console.log (aLaCuatro(7))   // m = 7

// funciones que reciben funciones


const sumar = (n1, n2) => n1 + n2
const restar = (n1, n2) => n1 - n2


function calculadora (n1, n2, fn){
    const resultado = fn(n1,n2)
    return resultado
}

console.log(calculadora (5,2,sumar))
console.log(calculadora (5,2, restar))


for(let i=0; i < array.length; i++){

}


const arrayNuevo = [1,2,3,4,5,6,7]
let suma = 0
arrayNuevo.forEach(elemento => suma += elemento)
console.log(suma)

