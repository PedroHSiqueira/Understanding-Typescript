// class sintax

class Departament {
  //Similar ao private mas extended class podem acessar tambêm 
  protected employees: string[] = []

  constructor(private readonly id: string,public name: string){
    this.name = name;
    this.id = id
  }

  describe() {
    console.log(`Department (${this.id}) : ${this.name}`);
    
  }

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

class ITDepartment extends Departament {
  admins: string[]
  constructor (id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins
  }
}

class Accounting extends Departament {
  private _lastReport:string

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

  constructor( id: string, private reports: string[]){
    super(id, "Accounting")
    this._lastReport = reports[0]
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

const it = new ITDepartment("1", ["Pedro"])

it.addEmployee("Pedro")
it.addEmployee("Henrique")

it.describe()
it.printEmployeeInfo()

// console.log(it);

const accounting = new Accounting("2", [])

//Mandando um Setter

accounting.lastReport = "Last Report"

accounting.addReport("Error Found...")

console.log(accounting.lastReport);

accounting.printReports()

accounting.addEmployee("Pedro")
accounting.addEmployee("Henrique")

accounting.printEmployeeInfo()
