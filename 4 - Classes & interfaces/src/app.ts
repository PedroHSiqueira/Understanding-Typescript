// class sintax
abstract class Department {
  //Similar ao private mas extended class podem acessar tambêm 
  protected employees: string[] = []

  constructor(protected readonly id: string, public name: string){
    this.name = name;
    this.id = id
  }

  static createEmployee(name: string) {
    return { name: name}
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string){
    this.employees.push(employee)
  }

  printEmployeeInfo(){
    console.log(this.employees);
    console.log(this.employees.length);
  }
}

//inheritance
//uso da palavra reservada extensds, cria uma extenção da classe principal  

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class Accounting extends Department {
  private _lastReport:string
  private static instance: Accounting

  //Getter
  get lastReport(){
    if(this._lastReport){
      return this._lastReport
    }
    throw new Error("No report Found ...")
  }

  //Setter
  set lastReport(value: string){
    if(!value){
      throw new Error("Need a valid value!")
    }
    this.addReport(value)
  }

  private constructor( id: string, private reports: string[]){
    super(id, "Accounting")
    this._lastReport = reports[0]
  }

  static getInstance(){
    if(Accounting.instance){
      return this.instance
    }

    this.instance = new Accounting("D2", [])
    return this.instance
  }

  describe(){
    console.log('Accounting Departmente - ID:' + this.id);
    
  }

  addEmployee(name: string){
    if(name === "Pedro"){
      return
    }

    this.employees.push(name)
  }

  addReport(text:string){
    this.reports.push(text)
    this._lastReport = text
  }

  printReports(){
    console.log(this.reports);
    
  }
}

const employee1 = Department.createEmployee('Pedro')
console.log(employee1);


const it = new ITDepartment("1", ["Pedro"])

it.addEmployee("Pedro")
it.addEmployee("Henrique")

it.describe()
it.printEmployeeInfo()

// console.log(it);

// const accounting = new Accounting("2", [])

const accounting = Accounting.getInstance()

//Mandando um Setter

accounting.lastReport = "Last Report"

accounting.addReport("Error Found...")

console.log(accounting.lastReport);

accounting.printReports()

accounting.addEmployee("Pedro")
accounting.addEmployee("Henrique")
accounting.describe()

// accounting.printEmployeeInfo()
