/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique;
let resultNull;

const competitorLower = competitorPizzas.map(p => p.toLowerCase());

const uniqueT1 = myPizzasT1.filter(pizza => !competitorLower.includes(pizza.toLowerCase()));
const uniqueT2 = myPizzasT2.filter(pizza => !competitorLower.includes(pizza.toLowerCase()));

resultUnique = [...uniqueT1, ...uniqueT2];

if (resultUnique.length > 0) {
  resultNull = null;
}

export { resultNull, resultUnique };

// console.log('Unique Pizzas:', resultUnique);
// console.log('Result Null:', resultNull);
