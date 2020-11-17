
var testArray = [29,30,39,40,49,50,59]

console.log(testArray)

console.log(testArray.fill("h", 2, 4));  // fill(replacevalue, startIndex, endIndex)

//StartIndex is Inclusive i.e.,in the above index[2] is replaced with "h"
//EndIndex is Exclusive i.e.,in the above index[4] is NOT replaced with "h"



//Filter expects to pass callback Arrow Function

var myNumber =[27,37,47,57,67,87,97]
const result = myNumber.filter((a) => (a>=67))
console.log(result);