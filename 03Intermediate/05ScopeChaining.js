
var uname ="Srujana"
console.log(uname)

function sayName()
{
    var uname = "Shreyas"
    console.log(uname)

    function sayNameInsideFunction()
    {
        console.log(uname)
    }
    sayNameInsideFunction();
}
sayName();

console.log(uname)