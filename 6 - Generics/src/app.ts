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
