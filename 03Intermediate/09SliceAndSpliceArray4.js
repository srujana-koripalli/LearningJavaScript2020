
var users =["Sruj", "sanJose", "sjsu", "Andhra", "gundu", "Dumbo", "Shreyas"]

//Slice (StartIndex (Inclusive), EndIndex (Exclusive))
console.log(users.slice(1,4))


//Splice (StartIndex (Inclusive), DeleteCount(Inclusive), String)
users.splice(1,3,"Added NEW")
console.log(users);