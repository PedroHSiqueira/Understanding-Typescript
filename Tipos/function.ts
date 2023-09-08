function add (n1: number, n2: number){
  return n1 + n2
}

function printResult(num: number) : void {
  console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (n1:number) => void){
  const result = n1 + n2
  return cb(result)
}

addAndHandle(10, 20, (result) => {
  console.log(result)
  return result
})