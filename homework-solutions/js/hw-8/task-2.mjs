/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

  function qtyOfVowels(word) {
   const vowelsChar = 'aeiouAEIOU';
    let qtyVowels = 0;
    for (let letter of word) {
      if (vowelsChar.includes(letter)) { 
        qtyVowels++;
      }
    }
    return qtyVowels;
  }

  function sortedByVowels(wordsArr) {

return [...wordsArr].sort((a,b) => qtyOfVowels(a) - qtyOfVowels(b));
};
  
console.log(sortedByVowels(words)); 
export { sortedByVowels };