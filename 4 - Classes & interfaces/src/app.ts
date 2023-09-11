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

class ITDepartment extends Departament {
  admins: string[]
  constructor (id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins
  }
}

class Accounting extends Departament {
  constructor( id: string, private reports: string[]){
    super(id, "Accounting")
  }

  addEmployee(name: string){
    if(name === "Pedro"){
      return
    }

    this.employees.push(name)
  }

  addReport(text:string){
    this.reports.push(text)
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

accounting.addReport("Um erro foi detectado ...")

// accounting.printReports()

accounting.addEmployee("Pedro")
accounting.addEmployee("Henrique")

accounting.printEmployeeInfo()


