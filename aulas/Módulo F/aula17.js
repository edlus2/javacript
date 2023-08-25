let amigo = {nome: 'jose',
sexo : 'M',
peso : 85.4,
engorda(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engorda(7)
console.log(`${amigo.nome} pesa: ${amigo.peso}Kg`)
