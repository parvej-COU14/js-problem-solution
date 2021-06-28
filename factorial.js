// using for loop

function factorial(n){
    var  factorial=1;
    for(var i=1;i<=n;i++){
        factorial=factorial*i
    }
    return factorial;
}
const testFactorial=factorial(10)
console.log(testFactorial)


// using while loop

function factorial(n){
    var  factorial=1;
    var i=1
    while(i<=n){
        factorial=factorial*i
        i++;
    }
    return factorial;
    
}
const testFactorial=factorial(8)
console.log(testFactorial)

// using do- while loop

function factorial(n){
    var  factorial=1;
    var i=1
    do{
        factorial=factorial*i
        i++;
    }
    while (i<=n)
    return factorial;
    
}
const testWhile=factorial(6)
console.log(testWhile)