 /* Função 01

function pi(v){
    if(v%2 == 0){
        return 'par'
    }else{
        return'impar'
    }
}

console.log(pi(8))


 função 02

function soma( n1=0, n2=0){
    return n1 + n2
}

console.log(soma(2 ))



funçao 03

let v = function(x) {
    return x*2
}

console.log(v(9))



fução 04

function fatorial(n){
    let fat = 1
    for(let c = n ; c > 1 ; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))


funçao 05

function fatorial(n){
    if(n == 1) {
        return 1
    } else{
        return n* fatorial(n-1)
    }
}

console.log(fatorial(5))
*/