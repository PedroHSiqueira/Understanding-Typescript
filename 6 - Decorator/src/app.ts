function Logger(logSting: string){
  return function (constructor: Function){
    console.log(logSting);
    console.log(constructor);
  }
}

@Logger('Logging - Person')
class Person {
  name =  "Pedro";

  constructor(){
    console.log("Creating a Person Object");
  }
}

const pers = new Person()

console.log(pers);
