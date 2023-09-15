//inetreface como um tipo Function

interface addFn {
  (a: number, b: number): number
}

let add:addFn

add = (n1: number, n2: number) => {
  return n1 + n2
}

interface Named {
  readonly name?: string;
  outputName?: string
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

//Usando a interface junto a Classe
class Person implements Greetable {
  name?: string;
  age: number = 18;

  constructor(n?: string) {
    if(n){
      this.name = n
    }
  }

  greet(phrase: string): void {
    if(this.name){
      console.log(phrase + " " + this.name);
    }else{
      console.log("HI!")
    }
  }
}

let user1: Greetable;
user1 = new Person()


user1.greet("Hello there - I am");
