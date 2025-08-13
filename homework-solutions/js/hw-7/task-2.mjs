/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
 
if (typeof word !== 'string') {
  return false;
}
  const cleanUpWord = word.toLowerCase();
  const reversedWord = cleanUpWord.split('').reverse().join('');
  return cleanUpWord === reversedWord;
}

console.log(isPalindrom('civic'));


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  
if (typeof sentence !== 'string' || sentence.trim() === '') {
  return []; 
}

  const word = sentence.trim().toLowerCase().split(' ');
  let longestWord = [];
  let maxWordLength = 0;

 for (let i = 0; i < word.length; i++) {
  if (word[i].length > maxWordLength) {
    longestWord = [word[i]];
    maxWordLength = word[i].length;
  } else if (word[i].length === maxWordLength) {
    longestWord.push(word[i]);
  }
}
return longestWord;
}

console.log(findLongestWords('Never learn to any programming language if you do not want to go crazy'));

export { isPalindrom, findLongestWords };
