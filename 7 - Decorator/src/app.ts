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

//Ordem de baixo para cima
@Logger("Logging")
@WithTemplate("<h1> My First Object </h1>", "app")
class Person {
  name =  "Pedro";

  constructor(){
    console.log("Creating a Person Object");
  }
}

const pers = new Person()

console.log(pers);

// -----------

function Log(target: any, propertyName: string | symbol){
console.log("Property Decorator");
console.log(target, propertyName);
}


class Product{
  @Log
  title: string;
  private _price: number;

  
  public set price(val: number) {
    if(val > 0){
      this._price = val;
    }else{
      throw new Error("Invalid Input - Must Be a Positve Number")
    }
  }
  

  constructor(t: string, p: number){
    this.title = t;
    this._price = p
  }

  getPriceWithTax(tax: number){
    return this._price * (1 + tax)
  }
}