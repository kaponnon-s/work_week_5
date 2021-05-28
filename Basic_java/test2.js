x = 9;
function factorial(x){
    sum = 1;
    while(x > 0)
    {
        sum = sum*x;
        x = x-1
    }
    return sum;
}
console.log("Factorial of "+x+" : "+factorial(x));