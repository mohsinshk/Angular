class Person {
    fName: string;
    lName: string;
    age: number;

    constructor(fName:string, lName:string, age:number)
    {
        this.fName=fName;
        this.lName=lName;
        this.age=age;
    }
    getFullname():string {
        return `Full Name is ${this.fName} ${this.lName} and age- ${this.age}`;
    }
}
    const p:Person=new Person('Siddh','ajm',25);
    console.log(p.getFullname());
