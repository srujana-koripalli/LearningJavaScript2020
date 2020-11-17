

console.log( 2+ 2) //number =4
console.log( 2+"2") // string =22, bcs js dont know how to add string & number & assumes 
console.log( 2+ '2') // string =22, bcs js dont know how to add string & number & assumes 

//Other example but loosely js assumes

var user='2'

if (user == 2)
{
    console.log("Here Js comparing 2 as String and equal to User, so this executed")
}


// Here For strict and correct comparision we use "3 equal ==="

var strictUser = '2'
if(strictUser === 2)
{
    console.log("But this should execute for strict comparision")
}
else 
{
    console.log("This should execute since 2 is not equal to '2' so")
}

