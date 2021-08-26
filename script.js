
let arrayTeste = [1,3,7,0,2,3,6,1,7,9]
let arrayTeste2 = ['k','e','n','z','i','e']

function callBack1 (elemento, indice,array){
    console.log(elemento +' - '+indice+' - '+array)
}

function callBack2 (elemento, indice,array){
    return elemento > 6;
}

function add (paran1, paran2){
    return paran1+paran2
}

/**FOREACH() */
console.log('FOR-EACH()')
function newForEach(array,callBack){
    for(let i=0; i<array.length; i++){
        callBack(array[i],i,array)
    }
}
console.log('newForEach(array, callBack):')
newForEach(arrayTeste,callBack1)

/**FILL() */
console.log('FILL()')
function newFill(array, valor, inicio,fim){
    valor = valor;
    inicio = inicio || 0;
    fim = fim || array.length;

    if (inicio< 0) {
        array[0]=valor
    }
    if (fim< 0) {
        fim=array.length+fim
    }
    for(let i=inicio;i<fim;i++){
        array[i]=valor
    }
    return array
}
console.log("newFill(array, 9,1,3):")
let nFill = newFill(arrayTeste,9,1,3)
console.log(nFill)


/**MAP() */
console.log('MAP()')
function newMap(array, callBack){
    let newArray =[]
    for(let i = 0;i<array.length;i++){
        newArray.push(callBack(array[i],i,array))
    }
    return newArray
}
console.log("newMap()")
newMap(arrayTeste, callBack1)

/**SOME() */
console.log('SOME()')
function newSome(array, callBack){
    for(let i = 0;i<array.length;i++){
        if(callBack(array[i],i,array)){
            return true
        }
    }
    return false
}
console.log('newSome(array, callback)')
console.log('ex. saber se tem algum item nesse array maior que 6')
console.log(newSome(arrayTeste, callBack2))


/**FIND()*/
console.log('FIND()')
function newFind(array, callBack){
    for(let i=0;i<array.length;i++){
        if(callBack(array[i],i,array)){
            return array[i]
        }
    }
    return undefined
}
console.log("newFind(array,callback)")
console.log('ex. pegar o primeiro item nesse array maior que 6')
console.log(newFind(arrayTeste, callBack2))

/**FIND-INDEX */
console.log('FIND-INDEX')
function newFindIndex(array, callBack){
    for(let i=0;i<array.length;i++){
        if(callBack(array[i],i,array)){
            return i
        }
    }
    return -1
}
console.log("newFindIndex(array, callBack)")
console.log('ex. aqui ele vai mostrar o indice do primeiro item maior que 6,caso nao exista retornará -1')
console.log(newFindIndex(arrayTeste, callBack2))

/**EVERY */
console.log('EVERY()')
function newEvery(array, callBack){
    for(let i = 0;i<array.length;i++){
        if(!callBack(array[i],i,array)){
            return false
        }
    }
    return true
}
console.log("newEvery()array, callBack")
console.log(newEvery(arrayTeste, callBack2))


/**FILTER() */
console.log('FILTER()')
function newFilter(array, callBack){
    let newArray=[]
    for(let i = 0;i<array.length;i++){
        if(callBack(array[i],i,array)){
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log("newFilter(array, callback)")
let nFilter = newFilter(arrayTeste,callBack2)
console.log(nFilter)

/**CONCAT() */

// function newConcat(...args){
//     let newArray=[]
// }
// console.log("newConcat(...args)")
// console.log(newConcat(arrayTeste, arrayTeste2))

/**INCLUDES() */
console.log('INCLUDES()')
function newIncludes(array, elemento){
    for(let i = 0;i<array.length;i++){
        if(array[i]=== elemento){
            return true
        }
    }
    return false
}
console.log("newIncludes(array, elemento'7')")
console.log(newIncludes(arrayTeste, 7))

/**INDEX-OF() */
console.log('INDEX-OF')
function newIndexOf(array, elemento, index){
    index = index || 0
    if(index >= array.length){
        return -1
    }
    //falta a parte de zero for negativo
    for(let i = index;i<array.length;i++){
        if(array[i]===elemento){
            return i
        }
    }
    return -1
}
console.log("newIndexOf(array,elemento'8', indice opcional)")
console.log("retorna o retorno do primeiro item igual a esse elemento")
console.log(newIndexOf(arrayTeste,7))

/**JOIN() */
console.log('JOIN()')
function newJoin(array, elemento){
    elemento = elemento || ",";
    let string = ""
    for(let i =0;i<array.length;i++){

        string+= array[i]
        if(i !== array.length-1){
            string+=elemento
        }
    }
    return string
}
console.log("newJoin(array,elemento'opcional')")
console.log(newJoin(arrayTeste2,","))

/**REDUCE() */
console.log('REDUCE()')
function newReduce(array, callBack, inicio){
    inicio = inicio || 0
    let contador= inicio
    if(typeof(inicio==="string")){
        inicio=""
    }
    for(let i=0;i<array.length;i++){
        contador =  callBack(contador, array[i])
    }
    if(inicio!==0){
        contador+=inicio
    }
    
    return Number(contador)
}
console.log("newReduce(array,callback)")
console.log(newReduce(arrayTeste, add))

/**FUNÇÕES EXTRAS */