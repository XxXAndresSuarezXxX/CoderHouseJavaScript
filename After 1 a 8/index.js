
// 1) Que es una funcion?
// 2) Estructura de una funcion
// 3) Función con parámetros
// 4) Return y asignación de funciones
// 5) Arrow functions
// 6) Uso de funciones en el proyecto




/*

function SaludoGenerico(){
    let nombre = prompt("Decime tu nombre")
    let apellido = prompt("Decime tu apellido")

    alert (`Hola ${nombre} ${apellido}`)
}
*/
//alert("Binevenido al MasterAfterClass")
//SaludoGenerico()



//3) Función con parámetros
/*
function SaludoEspecifico(nombre, edad){

    const year= 2022
    let yearNacimiento= year - edad
    alert(`Hola ${nombre}, tenes ${edad} años y naciste en el año ${yearNacimiento}`)
}
*/
// SaludoEspecifico("Seba", 41)

//let nombreEspecifico = prompt("Decime tu nombre")
//let edadEspecifica = prompt("Decime tu edad")

//SaludoEspecifico (nombreEspecifico, edadEspecifica)
/*
function esMayor(edad){

    if(edad >= 18){
        SaludoEspecifico(nombreEspecifico, edad)
    }else if(edad >=16){
        alert("Tenemos una propuesta para adolecentes")
    }else{
        alert("Sos muy pequeño")
    }
}
*/
//esMayor(edadEspecifica)

/*
const multiplicacion = (num1, num2)=>{
    alert(num1 * num2)
}

multiplicacion(10, 300)
*/





/*
const calculadoraIVA = (num1)=>{
    return num1 *1.21
}
let precioConIVA = calculadoraIVA(100)
alert(`El precio con IVA es de ${precioConIVA}`)

function saludoMayores(nombre, edad){
    debugger
    const year =2022 
    let yearNacimiento = year - edad
    let validacion = esMayor(edad)

    if (validacion){
        alert(`Hola ${nombre}, tenes ${edad} años y naciste en el año ${yearNacimiento}`)
    }else{
        alert("Sos menor")
    }
}

function esMayor(edad){
    if(edad>=18){
        return true
    }else{
        return false
    }
}
saludoMayores("Seba", 41)
*/


const Notas = [];



function calcularNota(alumn, promedio){
   // debugger
   // let sumaNotas= n1 + n2 + n3
   // let promedio = sumaNotas / 3




    if (promedio >= 7){
        alert(`El estudiante ${alumn} ha promocionado `)
    }else if(promedio >=4){
        alert(`El estudiante ${alumn} tiene la posibilidad de rendir final`)
    }else{
        alert(`El estudiante ${alumn} ha recursado`)
    }
}

//calcularNota("Seba", 8,7,6)

//let estudiante = prompt("Ingrese cantidad de estudiantes")

//for (let i = 0; i < estudiante; i++){
    
    let nombreEstudiante = prompt("Ingrese el nombre del estudiante")
    let nota1 = parseInt(prompt("Ingrese Nota 1"));
    Notas.push(nota1);
    let nota2 = parseInt(prompt("Ingrese Nota 2"))
    Notas.push(nota2);
    let nota3 = parseInt(prompt("Ingrese Nota 3"))
    Notas.push(nota3);
    //calcularNota (nombreEstudiante, nota1, nota2, nota3)
//}

console.log(Notas)


const res = Notas.reduce((acumulador, current)=> acumulador + current);
const promedio = res / 3;
console.log(promedio);
calcularNota(nombreEstudiante, promedio);




