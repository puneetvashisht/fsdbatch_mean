class Person{

    constructor(public id: number, public name: string , public age: number){

    }

    changeName(newname:string){
        this.name = newname;
    }

}

let p = new Person(12, "Ravi", 34);
console.log(p);

p.changeName("Julliet");

console.log(p);