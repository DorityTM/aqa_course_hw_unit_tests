class Employee {
	#salary;

	constructor(firstName, lastName, profession, salary) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._profession = profession;
		this.#salary = salary;

		  if (typeof firstName !== 'string') throw new Error('First Name must be a string');
		  if (typeof lastName !== 'string') throw new Error('Last Name must be a string');
		  if (typeof profession !== 'string') throw new Error('Profession must be a string');
		  if (typeof salary !== 'number') throw new Error('Salary must be a number');
	}

	get firstName() {
		return this._firstName;
	}
	set firstName(value) {
		if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[a-zA-Z ]+$/.test(value)) {
			throw new Error("First Name should be 2-50 characters long and contain only Latin letters");
		}
    return this._firstName = value;
	}
	get lastName() {
		return this._lastName;
	}
	set lastName(value) {
		if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[a-zA-Z ]+$/.test(value)) {
			throw new Error("Last Name should be 2-50 characters long and contain only Latin letters");
		}
		  return this._lastName = value;
	}

	get profession() {
		return this._profession;
	}

	set profession(value) {
		if (typeof value !== 'string' || value.trim() === '' || !/^[a-zA-Z\s ]+$/.test(value)) {
			throw new Error("Profession should contain only Latin letters and spaces, and should not be an empty string");
		}
		return this._profession = value;
	}

	get salary() {
		return this.#salary;
	}

	set salary(value) {
		if (typeof value !== 'number' || value <= 0 || value >= 10000 || isNaN(value)) {
			throw new Error('Invalid Salary Range. Salary must be a positive number not exceeding 9999.99');
		}
		return this.#salary = value;
	}
}
    

class Company {
  #employees;

	constructor(title, phone, address, employees = []) {
		this._title = title;
		this._phone = phone;
		this._address = address;
		this.#employees = employees;

	}

    get title() {
		return this._title;
	}

    get phone() {
        return this._phone;
    }

    get address() {
        return this._address;
    }
  
  addEmployee(employee) {
		if (!(employee instanceof Employee)) throw new Error("Invalid Employee Data");
		this.#employees.push(employee);
	}

	getEmployees() {
		return this.#employees;
	}

	findEmployeeByName(firstName) {
		const employee = this.#employees.find((emp) => emp.firstName === firstName);
    if (!employee) throw new Error (`Employee with name "${firstName}" was not found`);
    return employee;
	}


	#getEmployeeIndex(firstName) {
		const employee = this.#employees.findIndex((emp) => emp.firstName === firstName);
    if (employee === -1) throw new Error(`Employee with name "${firstName}" was not found`);
	}

	removeEmployee(firstName) {
		const index = this.#getEmployeeIndex(firstName);
		if (index === -1) {
      throw new Error(`Employee with name "${firstName}" does not exist`)
    }
    	this.#employees.splice(index, 1);
	}

	getTotalSalary() {
		return this.#employees.reduce((sum, emp) => (sum + emp.salary), 0);
	}
}

export { Employee, Company };
