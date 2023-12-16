function parOrImpar(number) {
    if(number <= 0){
        return `Insira um valor maior que 0`
    } else if (number % 2 == 0){
        return `${number} eh par`;
    } 
    return `${number} eh impar`;
}

console.log(parOrImpar(10)) //esperado eh par
console.log(parOrImpar(13)) //esperado eh impar
console.log(parOrImpar(0)) //esperado Insira um valor maior que 0