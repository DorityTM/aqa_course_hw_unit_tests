class Employee {
	#salary;

	constructor(firstName, lastName, profession, salary) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.profession = profession;
		this.#salary = salary;
	}
	get firstName() {
		return this._firstName;
	}
	set firstName(value) {
		if (typeof value !== "string") throw new Error("Invalid First Name");
		this._firstName = value;
	}

	get lastName() {
		return this._lastName;
	}

	set lastName(value) {
		if (typeof value !== "string") throw new Error("Invalid Last Name");
		this._lastName = value;
	}

	get profession() {
		return this._profession;
	}

	set profession(value) {
		if (typeof value !== "string") throw new Error("Invalid Profession");
		this._profession = value;
	}
	get salary() {
		return this.#salary;
	}

	set salary(value) {
		if (typeof value !== "number" || value < 0) throw new Error("Invalid Salary Range");
		this.#salary = value;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// console.log(emp1.firstName); // "John"
// emp1.salary = 3100;
// console.log(emp1.salary); // 3100

// const emp2 = new Employee('Jane', 'Smith', 'Designer', 1500);
// console.log(emp2.firstName); // "Jane"
// emp2.salary = 1100;
// console.log(emp2.salary); // 1100

// const emp3 = new Employee('Max', 'Kavun', 'DevOps', 7000);
// console.log(emp3.firstName);
// emp3.salary = 6000;
// console.log(emp3.salary); // 6000

class Company {
	#employees;

	constructor(title, phone, address, employees = []) {
		this.title = title;
		this.phone = phone;
		this.address = address;
		this.#employees = employees;
	}

	get title() {
		return this._title;
	}
	set title(value) {
		if (typeof value !== "string") throw new Error("Invalid Title");
		this._title = value;
	}


	get phone() {
		return this._phone;
	}
	set phone(value) {
		if (typeof value !== "number") throw new Error("Invalid Phone Number");
		this._phone = value;
	}


	get address() {
		return this._address;
	}
	set address(value) {
		if (typeof value !== "string") throw new Error("Invalid Address");
		this._address = value;
	}

	addEmployee(employees) {
		if (!(employees instanceof Employee)) throw new Error("Invalid Employee Data");
		this.#employees.push(employees);
	}

	getEmployees() {
		return this.#employees;
	}

    getInfo() {
        return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`
    }
}

// const company = new Company('Tech Corp', 123456, 'Main Street');
// const emp0 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp4 = new Employee('Jane', 'Smith', 'Designer', 1500);
// const emp5 = new Employee('Barbara', 'Johnson', 'QA', 2500);
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
