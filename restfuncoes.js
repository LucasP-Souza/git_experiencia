function soma(...valores){
    let res = 0
    for(valor of valores){
        res += valor
    }
    return res
}

console.log(soma(10,20,30,40))
console.log(soma(10,20,30,40,100))