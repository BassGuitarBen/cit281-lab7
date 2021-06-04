//Cit 281: Lab 7
//Ben Wright

class CustomError extends Error {

    constructor(args){
        super(args);
        this.message = "Custom Errors";
    }
}
function throwGenericError(){
    throw new Error("Generic Error");
}
function throwCustomError()  {
    throw new CustomError("Custom Error");
}
let myError = new CustomError();
console.log("Force generic error");
console.log("Force custom error");
try {
    console.log("Custom error try blovk")
   
} catch {
    console.log("Custom error catch block");
    console.log(myError.throwCustomError());
} finally {
    console.log("Custom error finally block")
}

try {
    
    console.log("Generic error try blovk")
    console.log(myError.throwGenericError());
} catch {
    console.log("Generic error catch block");
    console.log(myError.throwGenericError());
} finally {
    console.log("Generic error finally block")
}


/*console.log("Force custom error");
try {
    console.log("Custom error try blovk")
    myError.throwCustomError();
} catch {
    console.log("Custom error catch block");
    console.log(myError.throwCustomError());
} finally {
    console.log("Custom error finally block")
}}*/
