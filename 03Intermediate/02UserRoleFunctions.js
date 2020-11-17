

var getUserRole =function (name, user)    // function getUserRole(name, user)
{
switch(user)
{
  case "admin":
  return `${name} is admin with all access`
  break ; // break is of no use when there is a return. So with or without break it works :)

case "testPrep": 
  return `${name} is testprep with access create/delete tests`
  break ;


case "User":
  return `${name} is user, who consumes context`
  break ;

default:
    return `${name} is  trail user`
    break;
}
}

console.log(getUserRole("Srujana", "admin"))