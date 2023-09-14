interface Greetable {
  name: string;

  greet(phrase: string): void;
}

//Usando a interface junto a Classe
class Person implements Greetable {
  name: string;
  age: number = 18;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1: Person; // ou Greetable

user1 = new Person("Pedro")
user1.greet("Hello there - I am");
