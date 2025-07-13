function sum(...number){
    return number.reduce((acc,num)=>acc+num)
}
console.log(sum(1,2,3));