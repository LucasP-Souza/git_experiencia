const listaDeNumeros = [1,2,3,4,5,6,7,8,9,10]
const listaPares = []
const listaImpares = []

let indiceNumero = 0

while(indiceNumero < listaDeNumeros.length){
    if(listaDeNumeros[indiceNumero] % 2 === 0){
        listaPares.push(listaDeNumeros[indiceNumero])
    }else{
        listaImpares.push(listaDeNumeros[indiceNumero])
    }
    indiceNumero++
}

console.log(listaPares)
console.log(listaImpares)