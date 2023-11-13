// function findOutlier(integers) {
//     let odd = 0;
//     let pair = 0;
//     let oddNumber = 0;
//     let pairNumber = 0;
//     for (const number in integers) {
//         if (integers[number] % 2 !== 0) {
//             odd++;
//             oddNumber = integers[number];
//         } else if (integers[number] % 2 === 0) {
//             pair++;
//             pairNumber = integers[number];
//         };
//     }

//     if (odd === 1) return oddNumber;
//     else if (pair === 1) return pairNumber;
// }

// console.log(findOutlier([2,6,8,10,3]));

/****************************************************************************************/


function tribonacci(signature, n) {
    if (n === 0) return [];

    const signatureCopy = [...signature];
    let sum;

    while (signatureCopy.length < n) {
        sum = signatureCopy[signatureCopy.length - 1] + signatureCopy[signatureCopy.length - 2] + signatureCopy[signatureCopy.length - 3];

        signatureCopy.push(sum);
    }

    return signatureCopy.slice(0, n)
};


console.log(tribonacci([3, 2, 1,], 10));