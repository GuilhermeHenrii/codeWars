// Escrever uma função que recebe entre 1 e 3999 (ambos incluídos) e retorne esse número representado em algarismos romanos

function solution(arabicNumber){
    // um array com objetos, e cada objeto é um valo e seu correspondente em romano
    // essa gama de valores cobrem os valores que precisam do subtração
    let numAndNumerals = [
        { number: 1000, roman: 'M' },
        { number: 900, roman: 'CM' },
        { number: 500, roman: 'D' },
        { number: 400, roman: 'CD' },
        { number: 100, roman: 'C' },
        { number: 90, roman: 'XC' },
        { number: 50, roman: 'L' },
        { number: 40, roman: 'XL' },
        { number: 10, roman: 'X' },
        { number: 9, roman: 'IX' },
        { number: 5, roman: 'V' },
        { number: 4, roman: 'IV' },
        { number: 1, roman: 'I' },
    ]

    let romanLetter = ''; // aqui precisamos inicializar a variavel
    let number = arabicNumber;

    for(let i = 0; i < numAndNumerals.length; i++) {
        // verifica se se o valor no objeto é menor que o número passado
        // se for, é feito a subtração e é adicionada a letra romana
        // caso o valor do objeto for maior que o valor passado a código irá ler o objeto posterior
        if(numAndNumerals[i].number <= number) {
            number = number - numAndNumerals[i].number;
            romanLetter = romanLetter + numAndNumerals[i].roman;
            // aqui estamos voltando sempre um objeto na iteração
            // para o caso de termos letras repetidas
            // exemplo: 2000, onde teremos as letras MM e não MCMC
            i--;
        }
    }

    console.log(romanLetter);
}

solution(1);