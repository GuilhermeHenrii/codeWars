// Esse exercício consiste em verificar se o número fornecido é narcisista.
// Um numero narcisista é aquele que, se elevado todos os seus numeros 
// ao expoente x (x = numero de caracteres do numero), (ex: 153 = 1^3 + 5^3 + 3^3)
// e o resultado sendo exatamente o seu valor, esse número é considerado narcisista

function narcissistic(inputValue) {
    // Code me to return true or false
    const numberInString = String(inputValue);
    const numberInArr = numberInString.split('');
    const exponent = numberInArr.length;
    let result = 0;

    numberInArr.map((value, index) => result += value ** exponent);
    return result === inputValue ? true : false;
}

console.log(narcissistic(153));