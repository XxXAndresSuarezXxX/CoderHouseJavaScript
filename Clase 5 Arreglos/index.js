const primerArray = []  // vacio
const segundoArray = ["hola", true, 5, "hi", 10] // elementos => 5
//elemento numero 0//
console.log(segundoArray)
// elemento numero 5 //
console.log(segundoArray[4])
// cuantos elementos hay //
console.log(segundoArray.length)


for(let i=0; i<segundoArray.length; i++){
    console.log(segundoArray[i])
}

//METODOS

//AGREGAR

//.PUSH
segundoArray.push("NUEVO ELEMENTO")
//.UNSHIFT
segundoArray.unshift(1000)
console.log(segundoArray)

//ELIMINAR
//.POP
segundoArray.pop()
segundoArray.pop()
//.shift
segundoArray.shift()
segundoArray.shift()
console.log(segundoArray)


// splice     eliminar

const animales = ["gato","perro","serpiente","caballo","raton"]
// se posiciona en la posicion gato y de ahi borra a perro, serpiente y caballo
animales.splice(1,3)
console.log(animales)


// REEMPLAZAR    borra y reemplaza

animales.splice(1,2, "pajaro")
console.log(animales)

// .JOIN     concatena en string cadena de texto todos los elemento que hay separados con "comas ;"

const animalesJoin = animales.join(", ")
console.log (animalesJoin)

// fusionar 2 arreglos con .concat
const animales2= ["toro", "cerdo", "vaca"]
const animalesTodos = animales.concat(animales2)
console.log(animalesTodos)

//slice

const nuevosAnimales = animalesTodos.slice(2,4)
console.log(nuevosAnimales)


const index = animalesTodos.indexOf("burro")
console.log(animalesTodos[index])

// .include   para saber si un elemento esta o no

console.log(animalesTodos.includes("burro"))