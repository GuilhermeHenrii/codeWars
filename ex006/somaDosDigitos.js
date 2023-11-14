// timeOut !

function digitalRoot(n) {
    let digits = String(n);
    let numberInArray = String(n).split('');
    let result = 0;

    while (digits.length >= 2){
        for(let i = 0; i <= numberInArray.length - 1; i++){
            let values = Number(numberInArray[i]);
            result += values;
            digits = String(result);
        };

        numberInArray = String(result).split('');
    };

    return result;
};

console.log(digitalRoot(942));