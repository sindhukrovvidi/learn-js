// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
    console.log(`Error Message: ${this.errMsg}`)
}

const obj1 = {
    errMsg: "Object 1 error message"
}

logMsg.call(obj1);