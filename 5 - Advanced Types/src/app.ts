type Admin = {
  name: string,
  privileges: string[]
}

type Employee = {
  name: string,
  startDate: Date
}

// Para objetos, ele ira unir os types em questão
type advancedEmployee = Admin & Employee

const e1: advancedEmployee ={
  name: "Pedro",
  privileges: ["Create-user"],
  startDate: new Date()
}

//Para casos de união (Union Types), ele irá asummir o que tiverem em comum, neste caso o NUMBER
type combinable = string | number
type numeric = number | boolean

type universal = combinable & numeric

// ------------------------------------------------------------------

//Function Overloads

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: combinable, b: combinable){
  if(typeof a === "string" || typeof b === "string"){
    return a.toString() + b.toString()
  }

  return a + b
}

const result = add("Pedro", " Henrique")
result.split(" ")

//Optional Chaining

const fetchedUserData = {
  id: "u1",
  name: "Pedro",
  job: {title: "CEO", description: "My own company"}
}

console.log(fetchedUserData?.job?.title);


// Type Guards 

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee){
  console.log("Name: " + emp.name);
  
  //Uso do IN
  if("privileges" in emp){
    console.log("Privileges: " + emp.privileges);
  }
  
  if("startDate" in emp){
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1)

// uso do Instance OF

class Car {
  drive(){
    console.log("Driving ...");
    
  }
}

class Truck {
  drive(){
    console.log("Driving a truck ...");
    
  }

  loadCargo(amount: number){
    console.log("Loading a cargo ... " + amount);   
  }
}

type vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: vehicle){
  vehicle.drive()
  if(vehicle instanceof Truck){
    vehicle.loadCargo(1000)
  }
}

useVehicle(v1)
useVehicle(v2)

// Discriminate Unions

interface Bird {
  type: "bird"
  flyingSpeed: number
}

interface Horse {
  type: "horse"	
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal){
  let speed;

  switch(animal.type){
    case "bird":
      speed = animal.flyingSpeed
      break
    case "horse":
      speed = animal.runningSpeed
      break
  }

  console.log("Moving at speed: " + speed);
  
}

moveAnimal({type: "bird", flyingSpeed: 10})
moveAnimal({type: "horse", runningSpeed: 20})

//type Casting 

// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!
const userInputElement = document.getElementById("user-input")! as HTMLInputElement

if(userInputElement){
  (userInputElement as HTMLInputElement).value = "Hi there!"
}

interface ErrorContainer {
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital Letter!"
}
