let num = [1,4,6,8]
num.push(3)

console.log(`nosso vetor e um ${num}`)
console.log(`o vetor tem ${num.length} conteudo`)

/*for(let pos = 0 ; pos < num.length ; pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

let buscar = num.indexOf(0)
//pode trocar isso >> console.log(`o valor 6 esta na posição ${buscar}.`) por
if(buscar == -1){
    console.log(`o valor nao foi encontrado`)
}else{
    console.log(`o valor esta na posição ${buscar}.`)
}

console.log(`a ordem dos valor e ${num.sort()}`)