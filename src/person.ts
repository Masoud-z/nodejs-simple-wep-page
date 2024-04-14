class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hello, my name is ${this.name}, and I'm ${this.age}.`);
  }
}

export default Person;
