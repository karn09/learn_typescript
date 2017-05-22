interface Human {
    firstName: string;
    lastName: string;
    name?: Function;
    isLate?(time: Date): Function;
}

class Person implements Human {
    // public firstName = "";
    // public lastName = ""; // default public, or make private, or protected
    // constructor(firstName: string, lastName: string) {
    //     this.firstName = firstName
    //     this.lastName = lastName
    // }
    constructor(public firstName: string, public lastName: string) {

    }
    name() {
        return `${this.firstName} ${this.lastName}`
    }
    whoAreYou() {
        return `Hi i'm ${this.name()}`
    }
}

class Student extends Person {
    // course = "";
    // constructor(firstName: string, lastName: string, course: string) {
    //     super(firstName, lastName);
    //     this.course = course;
    // }
    constructor(public firstName: string, public lastName: string, public course: string) {
        super(firstName, lastName)
    }
    whoAreYou() {
        return `${super.whoAreYou()} and i'm studying ${this.course}`
    }
    test() {
        console.log(this.firstName);
    }
}

let john = new Student("john", "nieves", "angular 2");
console.log(john.test())