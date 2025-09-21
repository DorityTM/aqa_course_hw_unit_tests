// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта


function getKeyByValue<T extends Object, U>(obj: T, value: U): keyof T | undefined {
    for (const key of Object.keys(obj) as (keyof T)[]) {
        if (obj[key] === value) {
            return key;
        }
    }
    return undefined;
}

console.log(getKeyByValue({ a: 3, b: 5, c: 7 }, 5)); 
console.log(getKeyByValue({ a: 22, b: 44, c: 66 }, 45)); 
console.log(getKeyByValue({ name: "Olive", age: 25, city: "New York" }, "Olive")); 
console.log(getKeyByValue({ name: "Anatoliy", age: 32, city: "Warsaw" }, "Alex"));