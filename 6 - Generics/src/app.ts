// const names: Array<string> = []

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10)
//   }, 2000)
// })

// promise.then(data => {
//   data.toFixed(2)
// })

function merge<T extends Object, U extends Object> (objA: T, objB: U){
  return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'Max', hobbies:["sports"] }, { age: 30 })
console.log(mergedObj.age);

interface Lengthy {
  length: number
}

function countAndDesacribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value'
  if(element.length === 1){
    descriptionText = 'Got 1 element'
  } else if (element.length > 1){
    descriptionText = 'Got ' + element.length + ' elements'
  }
  return [element, descriptionText]
}

console.log(countAndDesacribe('Hi there!'));

// keyof

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
  return 'Value: ' + obj[key]
}

extractAndConvert({ nome: 'Max' }, 'nome')

// Generic Classes

class DataStorage<T> {
  private data: T[] = []

  addItem(item: T){
    this.data.push(item)
  }

  removeItem(item: T){
    if(this.data.indexOf(item) === -1){
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems(){
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()

textStorage.addItem('Pedro')
textStorage.addItem('João')
console.log(textStorage.getItems())

const NumberStorage = new DataStorage<number>()

NumberStorage.addItem(1)
NumberStorage.addItem(10)
console.log(NumberStorage.getItems())
