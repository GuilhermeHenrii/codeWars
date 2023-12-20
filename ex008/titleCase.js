// aqui eu preciso pegar o parametro título e deixa-lo com todos os começos de palavras com letras
// maiúsculas, exceto as palavras que estão sendo passadas no segundo array.

function titleCase(title, minorWords) {
    // passando todas as palavras para minusculas
    const titleLowerCase = title.toLowerCase();
    const minorWordsLowerCase = (minorWords || "").toLowerCase();

    const titleInArr = titleLowerCase.split(' ');
    // se o paremetro não for passado, vai ser retornado uma string vazia antes de executar o split
    const minorWordsInArr = (minorWordsLowerCase || "").split(' ');

    const titleInArrModifed = titleInArr.map((value, index) => {
        // se no array de minorWords tiver uma string vazia
        // significa que esse parametro não existe
        if(minorWordsInArr.indexOf('') !== -1) {
            const valueLower = value.toLowerCase();
            return valueLower.charAt(0).toUpperCase() + valueLower.slice(1);
        } else if(minorWordsInArr.indexOf(value) === -1) {
            //valor do array principal que não está no array secundário
            const valueLower = value.toLowerCase();
            return valueLower.charAt(0).toUpperCase() + valueLower.slice(1);
        } else if (index === 0){
            // prineira palavra sempre maiusucula
            const valueLower = value.toLowerCase();
            return value.charAt(0).toUpperCase() + valueLower.slice(1);
        } else {
            // o restante, que sao as palavras que estao no mesmo array
            return value;
        }
    })
   return titleInArrModifed.join(' ');
}
  
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));