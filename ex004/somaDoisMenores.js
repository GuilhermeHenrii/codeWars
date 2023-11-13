function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b); // ordenando do menor para o maior
    const minors = numbers.slice(0, 2);
    
    let sum = minors.reduce((ac, currentValue) =>{
        return ac + currentValue;
    }, 0);

    return sum;
}

console.log(sumTwoSmallestNumbers([5, 4, 10, 1, 8, 3, 7]));