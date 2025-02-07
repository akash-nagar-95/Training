// making a simple calculator : 

function add(a,b) {
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function division(a,b){
    if(b == 0){
        return "Cannot divide by zero !";
    }
    return a/b;
}
function modulus(a,b){
    return a%b;
}
function exponential(a,b){
    return a**b;
}

function Calculator(a,b,operation){
    return operation(a,b);
}
console.log(Calculator(10,5,add));
console.log(Calculator(10,5,subtract));
console.log(Calculator(10,5,multiply));
console.log(Calculator(10,0,division));
console.log(Calculator(10,5,modulus));
console.log(Calculator(10,5,exponential));
