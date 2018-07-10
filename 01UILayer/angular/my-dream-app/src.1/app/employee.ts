export class Employee{
    // id: number;
    // name: string;
    // salary: number;

    constructor(public id: number, public name: string, public salary: number){
        // this.id= id;
        // this.name = name;
        // this.salary = salary;
    }

    incrementSalary(newSalary: number){
        this.salary += newSalary;
    }
}