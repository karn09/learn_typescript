class Person {
    // public firstName = "";
    // public lastName = ""; // default public, or make private, or protected
    // constructor(firstName: string, lastName: string) {
    //     this.firstName = firstName
    //     this.lastName = lastName
    // }
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name() {
        return `${this.firstName} ${this.lastName}`;
    }
    whoAreYou() {
        return `Hi i'm ${this.name()}`;
    }
}
class Student extends Person {
    // course = "";
    // constructor(firstName: string, lastName: string, course: string) {
    //     super(firstName, lastName);
    //     this.course = course;
    // }
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.course = course;
    }
    whoAreYou() {
        return `${super.whoAreYou()} and i'm studying ${this.course}`;
    }
    test() {
        console.log(this.firstName);
    }
}
let john = new Student("john", "nieves", "angular 2");
console.log(john.test());
