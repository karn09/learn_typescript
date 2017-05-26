let decimal: number = 6;
let done: boolean = false;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Function
let fun: Function = () => console.log("Hello");
function returnNumber(): number {
  return 1;
}

// Void
function returnNothing(): void {
  console.log("Moo");
}

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let go: Direction;
go = Direction.Up;

class Person {};
let person: Person;
let people: Person[]; // will hold array of Person 

let notsure: any = 1;
notsure = "hello";

function returNothing(): void {
    console.log("Moo");
    // return 1; // will return error
}

let value: any = "John Nieves";
let strlen: number = (<string>value).length; // type assertion

class Text {}
class Audio {}
class Video {}
class Link {}

class Post<T> {
    content: T;
}

let videoPost: Post<Video>