class Person {
    constructor(protected fName:string, protected lName:string, protected age:number)  { }
    getFullname():string {
        return `Full Name is ${this.fName} ${this.lName} and age- ${this.age}`;
    }
}
    let p:Person=new Person('John','doe',25);
    console.log(p.getFullname());

    class Employee extends Person {
        constructor(
            private id:number,            
            fName:string,
            private mName:string,
            lName:string,
            age:number
        ){
            super(fName,lName, age);
        }

        getFullname():string {
           /* const namesarr:Array<string>=super.getFullname().split(" ");
           namesarr.splice(4, 0, this.mName);
           const fullnm=namesarr.join(" "); */
           return `${this.fName} ${this.mName} ${this.lName}`;
        }
    }
    const manager:Person =new Employee(1,'John','patrick','doe',30);
    console.log(`${manager.getFullname()}`);