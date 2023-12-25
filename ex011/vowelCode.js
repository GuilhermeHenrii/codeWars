// Nesse exercício teremos duas funções
// a função ENCODE será responsável por tranformar todas as vogas minusculas
// em numero, conforme a tabela a baixo:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// a função DECODE será responsável por pegar os numeros e
// transforma-los em vogais, conforme a mesma tabela, ou seja
// fazer o trabalho inverso da função anterior


function encode(string) {
    const stringInArr = string.split('');

    for(let i = 0; i < stringInArr.length; i++) {
        switch(stringInArr[i]) {
            case 'a':
                stringInArr[i] = '1';
                break
            case 'e':
                stringInArr[i] = '2';
                break
            case 'i':
                stringInArr[i] = '3';
                break
            case 'o':
                stringInArr[i] = '4';
                break
            case 'u':
                stringInArr[i] = '5';
                break
        }
    }

    return stringInArr.join('');
}

encode();

function decode(string) {
    const stringInArr = string.split('');

    for(let i = 0; i < stringInArr.length; i++) {
        switch(stringInArr[i]) {
            case '1':
                stringInArr[i] = 'a';
                break
            case '2':
                stringInArr[i] = 'e';
                break
            case '3':
                stringInArr[i] = 'i';
                break
            case '4':
                stringInArr[i] = 'o';
                break
            case '5':
                stringInArr[i] = 'u';
                break
        }
    }

    return stringInArr.join('');
}

decode();