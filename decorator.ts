function Student(config) {
    return function course(target) {
        Object.defineProperty(target.prototype, 'course', {value: () => config.course})
    }
}
//attach Student to Person
@Student({
    course: "Angular 2"
})
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let john = new Person('John', 'Nieves')
console.log(john.course())