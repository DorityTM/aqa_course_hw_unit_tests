/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arr) {
  const arrTd= [];
  for (const el of arr) {
    arrTd.push(...el)
  };
  return arrTd
}

 console.log(mergeArrays([1, 2], [4, 5], [7, 8]));

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
//function devideBy(sentence) {
//   const words = sentence.trim().split(' ');
//   const result = words.map((word, index) => {
//     if (word.length === 0) return '';
//     if (index === 0) {
//       return word.charAt(0).toLowerCase() + word.slice(1);
//     } else {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }
//   });
//   return result.join('_');
//}


 function devideBy(sentence) {
	const wordsInSentence = sentence.trim().split(' ');
	let result = ''

	for (let i = 0; i < wordsInSentence.length; i++) {
		if (wordsInSentence[i] === '')
			continue;
		if (i === 0) {
			result += wordsInSentence[i].charAt(0).toLowerCase() + wordsInSentence[i].slice(1).toLowerCase();
		} else {
			result += '_' + wordsInSentence[i].charAt(0).toUpperCase() + wordsInSentence[i].slice(1).toLowerCase();
		}
	}
	return result;
}

console.log(devideBy('Never learn to Java Script'));

/*cleqr
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
// function fibonacci(n) {
//   const fib = [0, 1];
//   if (typeof n !== 'number' || n < 0);   
//     if (n < 3) {
//     return fib (n - 1);
//   }
//   for (let i = 2; i < n; i++) {
//   fib[i] = fib[i - 1] + fib[i - 2];
// } 
//   return fib[n - 1];
// }

// console.log (fibonacci(6))

function fibonacci(n) {
  let fib1 = 0;
  let fib2 = 1;
  let result = 0;
  if (n === 0) {
    return 0
  };
  if (n === 1) {
    return 1
  };
  if (n < 0) {
    return 'Input must be a non-negative integer';
  }
  for (let i = 2; i <= n; i++) {
    result = fib1 + fib2;
    fib1 = fib2;
    fib2 = result;
  }

  return result;
}

console.log (fibonacci(19))

export { mergeArrays, fibonacci, devideBy };
