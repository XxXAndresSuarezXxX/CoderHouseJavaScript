// // animal 1

// const tipoAnimal1 = "perro";
// const nombreAnimal1 = "Firulais";
// const edadAnimal1 = 4;

// // animal 2

// const tipoAnimal2 = "gato";
// const nombreAnimal2 = "Mishu";
// const edadAnimal2 = 5;

// //objeto animal 1

// const animal1Obj = {
//     tipo: "perro",
//     nombre: "Firulais",
//     edad: 4,
//     esAdoptado: true
// }

// //objeto animal 2

// const animal2Obj = {
//     tipo: "gato",
//     nombre: "Mishu",
//     edad: 5
// }

// //console.log (animal1Obj)

// // LLamar una propiedad en particular de un objeto
// // 1er Metodo
// //console.log(animal1Obj.edad)
// //console.log(animal1Obj.nombre)

// //2do Metodo
// //console.log(animal2Obj["edad"])
// //console.log(animal2Obj["nombre"])

// //console.log(`Tengo dos objetos animales, uno es un ${animal1Obj.tipo} y el otro es un ${animal2Obj.tipo}`)



// //quiero añadir una propiedad sin  ir hasta arriba

// animal1Obj.esAdoptado = true;
// animal1Obj["color"] = "blanco"

// //Modificar datos de propiedades

// animal2Obj.nombre = "Luna"
// // Eliminar una propiedad
// delete animal1Obj.color
// delete animal1Obj.nombre

// console.log(animal1Obj)


// // Crear funcion constructora

// function Animal(tipo, nombre, edad){
//     this.tipo = tipo
//     this.nombre = nombre
//     this.edad = edad
// }
// const animal3Obj = new Animal("ganilla", "Turuleca", 2)
// const animal4Obj = new Animal ("raton", "Perez", 10)

// console.log(animal3Obj)
// console.log(animal4Obj)


//
function NuevoUsuario(nombre, email, password){
    //atributo
    this.nombre = nombre
    this.email = email
    this.password = password
    function tieneEmail(user){
    
    //metodo
    
    if(user.email){
        return true
    }else{
        return false
    }
}
}

const usuario1 = new NuevoUsuario("Sheba", "Sheba.lyon@gmail.com", 123456)
const usuario2 = new NuevoUsuario("Lucia", "luciabarrera83@gmail.com", 789456)
const usuario3 = new NuevoUsuario("Mauro", null , 456789123)

console.log(usuario1, usuario2, usuario3)



console.log(usuario1.email)
console.log(usuario3.email)


//clases

class Animal{
    constructor(tipo, nombre, edad){
        this.tipo = tipo
        this.nombre= nombre
        this.edad = edad
    }
}

const animal5Obj = new Animal("pajaro", "Carpintero", 8)
console.log(animal5Obj)


class NuevoUsuario2{
    constructor(nombre, email, password){
        this.nombre = nombre
        this.email = email
        this.password = password
    }
    tieneEmail(){
        if(this.email){
            return true
        }else{
            return false
        }
    }
}

const usuario4 = new NuevoUsuario2("Fatima", "fatima@gmail.com", "1235sadf")
console.log(usuario4.tieneEmail())