let userInput:unknown;
let userName: string

userInput = 5
userInput = "Pedro"

if(typeof userInput === "string"){
  userName = userInput
}

function generateError(message: string, code: number): never{
  throw { Message:message , ErrorCode: code}
}

generateError("Error", 404)