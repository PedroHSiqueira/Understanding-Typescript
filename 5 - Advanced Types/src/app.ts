type admin = {
  name: string,
  privileges: string[]
}

type employee = {
  name: string,
  startDate: Date
}

// Para objetos, ele ira unir os types em questão
type advancedEmployee = admin & employee

const e1: advancedEmployee ={
  name: "Pedro",
  privileges: ["Create-user"],
  startDate: new Date()
}

//Para casos de união (Union Types), ele irá asummir o que tiverem em comum, neste caso o NUMBER
type combinable = string | number
type numeric = number | boolean

type universal = combinable & numeric