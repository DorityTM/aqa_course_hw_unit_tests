// Напиши дженерик функцию getAvgSalary принимающая через запятую любой набор объектов,
// у которых есть как минимум поле salary: number, и возвращается среднее арифметическое зарплат всех переданных объектов

interface IEmployee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

const employees: IEmployee[] = [
  { id: 1, name: "Olive", position: "Senior Manual QA", salary: 5000 },
  { id: 2, name: "Alex", position: "Senior AQA", salary: 6000 },
  { id: 3, name: "Anatoliy", position: "Lead AQA", salary: 7000 },
];

function getAvgSalary<T extends { salary: number }>(...args: T[]) {
  return (
    args.reduce((accumulator, object) => accumulator + object.salary, 0) /
    args.length
  );
}

console.log(getAvgSalary(...employees));