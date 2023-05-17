console.log("Hello world")

// these are comments

/*
Multiple line comments
it wont print
*/
console.log("Declare a variable")
//var,let,const are the data types.

let a = 4 
console.log(a)
console.log(typeof(a)) // to know what data type is 

let b = 6

let c = "JI"
console.log(typeof(c)) // to know what data type is 

let required = true
console.log(typeof(required)) // to know what data type is 

c = a+b
console.log(c)
//we cannnot re declare variable with "let" keyword but possible with "var"
// var c= a+b is reassigned when existing c is var
console.log(!required)
//const can't be reassigned




Const ticketbook = new promise((resolve,reject) =>{
    Let bookingSuccess = true
    if(bookingSuccess)
    resolve()
    Else
    reject()
    })
    ticketbook.then(success) // success na success method ah call pannidu
    .catch(failure) //failure na failure method ah call pannidu
    
    Function success(){
    console.log(“Successfully booked”)
    }
    function(){
    console.log(“failed”)
    }
    





