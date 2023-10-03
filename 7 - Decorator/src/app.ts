function Logger(logSting: string){
  return function (constructor: Function){
    console.log(logSting);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string){
  return function(_: Function){
    const hookEl = document.getElementById(hookId)
    if(hookEl) {
      hookEl.innerHTML = template
    }
  }
}

@WithTemplate("<h1> My First Object </h1>", "app")
class Person {
  name =  "Pedro";

  constructor(){
    console.log("Creating a Person Object");
  }
}

const pers = new Person()

console.log(pers);
