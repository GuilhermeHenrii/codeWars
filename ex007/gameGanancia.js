function score(dice) {
    let count = 0;
    let repeat = 1;
    let number = dice[count];
    let oneValue = 0;
    let fiveValue = 0;
    let diceCopy = [...dice];
    let result = 0;
    
    for (let i = 1; i <= 4; i++) { 
        if (number === dice[i]) repeat++;

        // se x numero se repetir 3 vezes no array, tire-os do mesmo e, verificar os dois numeros restantes se são 1 ou 5 (1 = 100 e 5 = 50);
        if (repeat === 3) {
            let index = diceCopy.indexOf(number);
            while(index >= 0 && diceCopy.length > 2) {
                diceCopy.splice(index, 1)
                index = diceCopy.indexOf(number);
            }

            return showScore(number, oneValue, fiveValue, diceCopy);
        }
        if (i === 4) {
            count++;
            number = dice[count];
            for (let j = 2; j <= 4; j++) {
                if (number === dice[j]) repeat++;
                if (repeat === 3) {
                    let index = diceCopy.indexOf(number);
                    while(index >= 0 && diceCopy.length > 2) {
                        diceCopy.splice(index, 1)
                        index = diceCopy.indexOf(number);
                    }

                    return showScore(number, oneValue, fiveValue, diceCopy);
                }
                if (j === 4) {
                    count++;
                    number = dice[count];
                    for (let k = 3; k <= 4; k++) {
                        if (number === dice[k]) repeat++;
                        if (repeat === 3) {
                            let index = diceCopy.indexOf(number);
                            while(index >= 0 && diceCopy.length > 2) {
                                diceCopy.splice(index, 1)
                                index = diceCopy.indexOf(number);
                            }

                            return showScore(number, oneValue, fiveValue, diceCopy);
                        }
                    }
                }
            }
        }

    }

    diceCopy.forEach((element) => {
        if(element === 1) result += 100;
        if(element === 5) result += 50; 
    });

    return result;
}

function showScore(number, oneValue, fiveValue, diceCopy) {
    console.log(number, oneValue, fiveValue, diceCopy);
    let result;

    if (number === 1) result = 1000;
    else if (number === 2) result = 200;
    else if (number === 3) result = 300;
    else if (number === 4) result = 400;
    else if (number === 5) result = 500;
    else if (number === 6) result = 600;

    diceCopy.forEach(element => {
        if(element === 1) oneValue++;
        if(element === 5) fiveValue++;
    });

    console.log(oneValue, fiveValue);

    if(oneValue === 1) result += 100;
    if(oneValue === 2) result += 200;

    if(fiveValue === 1) result += 50;
    if(fiveValue === 2) result += 100;

    return result;
}


console.log(score([1, 5, 1, 6, 2]));