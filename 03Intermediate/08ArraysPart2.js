 // "function isEven(element)"or "var isEven =function(element)"  or "var isEven =(element) =>function isEven(element)"
// All the above function declarations are same

var isEven = (element) =>  // This kind of function declaration is called "Arrow Function"
{                    
if (element % 2=== 0)  {return true}
else  { return false}
}
console.log(isEven(2))


//2nd Example using "every" keyword
// By writing "every(isEven)", we are just refercing function but not calling, u can observe we didnt use ()after isEven, hence its referencing not calling

console.log([2,4,6,8].every(isEven))    //Here it is comparing  every number to isEven function element


//Using "Arrow Function Callback" function, we can simpilfy the above whole function
//Callback Function =A simple function who doesnt have a name
// Structure is ** every( () => () ) ** or  ** every( () => { return })


    
var result = [3,5,7,9].every((element) => (element%2 === 0));
console.log(result)