//1st Example, function call is before the function defintion. 
//Function declaration are scanned and made "Available"

tipper(15);

function tipper(a)
{
    var bill=a;
    console.log(a + 5);
}


//If function is written in variable, then the function call before the function defintion "DONT WORK- throws ERROR"
// So Always FunctionCall should be after FunctionDefinition in declaring Variable


var bigTipper=function (a)
{
    var bill=a;
    console.log(a + 5);
}
bigTipper(75);

//Variable declaration is scanned and made "Undefined"
//3rd Example

console.log(urname);
var urname ='Srujana'


//4th Example
function test(){
    var urname ="Kartik"
    console.log(urname)
}
test();

console.log(urname)