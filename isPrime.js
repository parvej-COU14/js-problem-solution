function isPrimeNumber(n){
    for(var i=2;i<n;i++){
        if(n%i==0){
            return 'Not a Prime Number';
        }
    }
    return 'Your number is a prime number'
}
var result=isPrimeNumber(125)
console.log(result);