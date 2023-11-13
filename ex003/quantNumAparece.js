function count(string) {
    const equalChar = {};
    
    for(let i = 0; i < string.length; i++){
        const char = string[i];
        equalChar[char] = (equalChar[char] || 0) + 1; // se equalChar[char] for um valor true, vou somar mais um na chave, se não, é pq é a primeira vez que a letra apareceu na tela          
    };

    console.log(equalChar);
    return equalChar;
}

console.log(count('aba'));