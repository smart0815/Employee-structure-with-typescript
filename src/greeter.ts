interface Person {
  firstName: string;
  lastName: string;
}

interface Employee {
  uniqueId: number;
  name: string;
  subordinates: Employee[];
}

const ceo: Employee = {
  uniqueId: 1,
  name: 'Mark Zuckerberg',
  subordinates: []
}

const SarahDonald: Employee = {
  uniqueId: 2,
  name: 'Mark Zuckerberg',
  subordinates: []
}

const TylerSimpson: Employee = {
  uniqueId: 3,
  name: 'Mark Zuckerberg',
  subordinates: []
}

interface IEmployeeOrgApp {
  ceo: Employee;
  /**
  * Moves the employee with employeeID (uniqueId) under a supervisor
  (another employee) that has supervisorID (uniqueId).
  * E.g. move Bob (employeeID) to be subordinate of Georgina
  (supervisorID). * @param employeeID
  * @param supervisorID
  */
  move(employeeID: number, supervisorID: number): void;
  /** Undo last move action */
  undo(): void;
  /** Redo last undone action */
  redo(): void;
}

class EmployeeOrgApp implements IEmployeeOrgApp {
  ceo: Employee;
  move(employeeID: number, supervisorID: number): void {
    throw new Error("Method not implemented.");
  }
  undo(): void {
    throw new Error("Method not implemented.");
  }
  redo(): void {
    throw new Error("Method not implemented.");
  }
  
}

function EmployeeLogic(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };



export class Greeter {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    // let message: string = 'Hello, TypeScript!';
    // let heading = document.createElement('h1');
    // heading.textContent = message;
    // document.body.appendChild(heading);

    document.body.textContent = greeter(user);
    console.log(`Hi, ${this.name}!`);
  }
}