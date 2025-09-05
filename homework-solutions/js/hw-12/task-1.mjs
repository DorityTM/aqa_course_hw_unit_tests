// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callback) {
    console.log("Waiting 2 seconds...");
    setTimeout(callback, 2000);
}

delayTwoSeconds(() => console.log("Hello after 2 seconds!"));

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль

const promise1 = new Promise ((resolve) => {
    resolve(1);
});
promise1.then((result) => {
    console.log(result);
});

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const promiseEpicFail = new Promise((_,reject) => {
    reject("Promise failed");
});
promiseEpicFail.catch((error) => {
    console.log(error);
});

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

const arrNum = [9, 7, 5, 3, 1]

function promiseNumber(num) {
	return new Promise((resolve, _) => {
		resolve(num);
	});
}

arrNum.forEach((num) => {
	promiseNumber(num).then((result) => {
		console.log(`Output ${result}`);
	});
});

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then

const promiseArr1 = [promiseNumber(12), promiseNumber(25), promiseNumber(37)];

function promiseNumber(num) {
	return new Promise((resolve, _) => {
		resolve(num);
	});
}

Promise.all(promiseArr1)
	.then((result) => {
		result.forEach((result) => {
			console.log(`Output ${result}`)
		});
	});

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
// в консоль статус и результат каждого промиса через .then

const promiseArrSettled1 = [promiseNumber(1), promiseNumber(2), promiseNumber(3)];

function promiseNumber(num) {
	return new Promise((resolve, _) => {
		resolve(num);
	});
}

Promise.allSettled(promiseArrSettled1)
	.then((results) => {
		results.forEach((result) => {
			if (result.status === "fulfilled") {
				console.log(`Resolved: ${result.value}`);
			} else {
				console.log(`Rejected: ${result.reason}`);
			}
		});
	});



// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch


const promiseArr2 = [promiseNumber(5), promiseNumber(7), promiseNumber(9)];
function promiseNumber(num) {
	return new Promise((resolve, _) => {
		resolve(num);
	});
}

async function allTryCatch(promiseArr2) {
	try {
		const result = await Promise.all(promiseArr2);
		result.forEach(result => {
			console.log(`Output ${result}`);
		});
	} catch (error) {
		console.error(error);
	} finally {
		console.log("Finally Done");
	}
}

allTryCatch(promiseArr2);




const promiseArrSettled2 = [promiseNumber(-1), promiseNumber(-2), promiseNumber(-3)];

function promiseNumber(num) {
	return new Promise((resolve, _) => {
		resolve(num);
	});
}

async function allSettledTryCatch(promiseArrSettled2) {
	try {
		const result = await Promise.allSettled(promiseArrSettled2);
		result.forEach(result => {
			if (result.status === "fulfilled") {
				console.log(`Resolved: ${result.value}`);
			} else {
				console.log(`Rejected: ${result.reason}`);
			}
		});
	} catch (error) {
		console.error(error);
	} finally {
		console.log("Finally Done");
	}
}

allSettledTryCatch(promiseArrSettled2);