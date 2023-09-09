var userInput;
var userName;
userInput = 5;
userInput = "Pedro";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { Message: message, ErrorCode: code };
}
generateError("Error", 404);
