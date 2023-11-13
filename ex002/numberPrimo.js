function isPrime(num) {
    let divisors = 0;
    let isPrime;

    if (num < 0) {
        isPrime = false;
    }

    if (num > 0) {
        for (let i = num; i !== 0; i--) {
            if (num % i === 0) divisors++;

            if (divisors === 2) isPrime = true;
            else isPrime = false;
        };
    };

    return isPrime === true ? 'Número primo' : 'Número não é primo';
}

console.log(isPrime(-11));