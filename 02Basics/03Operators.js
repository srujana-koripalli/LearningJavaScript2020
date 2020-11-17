
var sellingPrice =200
var listingPrice = 900
var discountPercentage = ((listingPrice -sellingPrice)/listingPrice * 100)
console.log(discountPercentage);

roundDiscountOffer = Math.round(discountPercentage)
console.log("Current Rounded offer is :" + roundDiscountOffer+ " %off")

console.log(typeof roundDiscountOffer) //"typeof" is also a dataype which can be used to see what datatype is the next value

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

