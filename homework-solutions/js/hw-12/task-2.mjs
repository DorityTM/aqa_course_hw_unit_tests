// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Проверьте, что айди в респонсе === 201
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена


    async function createTodo({
	userID,
	id,
	title,
	completed
}) {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
			method: "POST",
			body: JSON.stringify({
				userID,
				id,
				title,
				completed
			}),
			headers: {
				"Content-Type": "application/json"
			},
		});
		if (!response.ok) throw new Error(response.status + ":Failed to create");
		const body = await response.json();
		if (body.id !== 201) throw new Error("Invalid user ID");
		return body;
	} catch (error) {
		console.error(error.message);
	} finally {
		console.log("Function mission completed");
	}
}

createTodo({
		userID: 789,
		id: 666,
		title: "Ya ne vdupliayu",
		completed: true
	})
	.then(body => console.log(body));
