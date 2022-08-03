function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        primeNumber.push(i);
    }
    alert("For n = "+n+" prime numbers are "+primeNumber);
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
let i = 0;
const primeNumber= [];
let number = prompt("Enter a positive integer")
while (true) {
    if (Number(number) < 0 || isNaN(number) || !number || number%1 != 0) {
        number = prompt("Enter a positive integer")
    }
    else {
        showPrimes(number);
        break;
    }
}