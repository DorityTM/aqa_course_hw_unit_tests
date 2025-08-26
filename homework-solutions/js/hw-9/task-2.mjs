/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссылку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {

	if (typeof character?.name !== 'string' || typeof character?.age !== 'number') {
		throw new Error('Invalid Character data')
	} else {
		const newCharacter = {
			name: character.name,
			age: character.age
		};
		characters.push(newCharacter);
	}
}
addCharacter({
	name: 'Marat',
	age: 37
});
//console.log(characters);

function getCharacter(name) {
   return characters.find(value => value.name === name)
}
//console.log(getCharacter('Barney'));


function getCharactersByAge(minAge) {
	if (typeof minAge !== 'number') {
		throw new Error('Access Denied')
	}
	return characters.filter(value => value.age >= minAge)
}
//console.log(getCharactersByAge(39))

function updateCharacter(name, newCharacter) {
	const character = getCharacter(name);
	if (typeof name !== 'string') {
		throw new Error('Character does not exist');
	}
	Object.assign(character, newCharacter);

}
updateCharacter('Fred', {
	name: 'Alex',
	age: 32
});
//console.log(characters);


function removeCharacter(name) {
  const index = characters.findIndex(char => char.name === name);
  if (index === -1) throw new Error('Character does not exist');
  characters.splice(index, 1);
}

removeCharacter('Marat');
//console.log(characters);

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
