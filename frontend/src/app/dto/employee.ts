export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;

  constructor(args: Employee = <Employee>{}) {
    this.id = args.id;
    this.firstName = args.firstName;
    this.lastName = args.lastName;
    this.email = args.email;
  }

}
