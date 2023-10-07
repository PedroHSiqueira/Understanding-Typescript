function Logger(logSting: string) {
  return function (constructor: Function) {
    console.log(logSting);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends {new(...args: any[]): {name:string} }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

//Ordem de baixo para cima
@Logger("Logging")
@WithTemplate("<h1> My First Object </h1>", "app")
class Person {
  name = "Pedro";

  constructor() {
    console.log("Creating a Person Object");
  }
}

const pers = new Person();

console.log(pers);

// -----------

function Log(target: any, propertyName: string | symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Access Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  public set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Input - Must Be a Positve Number");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
