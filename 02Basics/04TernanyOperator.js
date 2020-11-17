/* The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?),
 then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. 
 This operator is frequently used as a shortcut for the if statement.*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator


var authenticated = true

if(authenticated)
{
    console.log("Show the User SignOUT button")
}
else 
{
    console.log("Show the User SignIN button")
}


// Orelse the below is same as if elSE

authenticated ? console.log("Show the User SignOUT button") : console.log("Show the User SignIN button")