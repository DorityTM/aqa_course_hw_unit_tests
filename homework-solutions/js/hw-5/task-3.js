/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
const vowels = 'aeiou';
let vowelsCount = 0;
let consonantsCount = 0;
const LowerCaseWord = word.toLowerCase();

for (let i = 0; i < LowerCaseWord.length; i++) {
    const char = LowerCaseWord[i];     
    if (vowels.includes(char)) {
    vowelsCount ++;
        } else if (/[a-zA-Z]/.test(char)) {
    consonantsCount ++}
    }
    
    vowelsAndConsonantsResult = `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;

export { vowelsAndConsonantsResult };
//console.log(vowelsAndConsonantsResult);