
const arrayNuevo= [1,2,3,4,5,6,7,8,9]
//const numeroDeseado = arrayNuevo.find(elemento =>elemento ===8)
//console.log(numeroDeseado)



    //some
    const NumeroDeseado = arrayNuevo.some(e=>e===8)
    console.log(NumeroDeseado)

    //filter()

    const arrayFiltrado = arrayNuevo.filter(e=>3 && e!==4)
    console.log(arrayFiltrado)


    //Map()
    const arrayMap = arrayNuevo.map (e=>e+1)
    console.log(arrayMap)


    //short() Ordena en numero descendiente

    arrayNuevo.sort((e1,e2)=>e1-e2)
    console.log(arrayNuevo)


    // Match
    console.log(Math.E)
    let numero1 = 4.5676567865
    console.log(Math.floor(numero1))

    // Date

    const fechaActual = new Date()
    console.log(fechaActual)