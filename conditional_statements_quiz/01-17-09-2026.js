// Conditional statements

// const age = 20
// if(age >= 20) {
//  console.log('you can attend the seminar');
// }else {
//  console.log('you cannot attend the seminar');
// }

// Create an object with fields such as: fullName, productName, price, orderId
// check for valid object, where the price is >= 1000
//  and return a string with a value known as: This is a valid product.

// const firstObject = {
//  'fullName' : 'James Peter',
//  'productName' : 'Powerbank',
//  'price' : 200,
//  'orderId' : 'IUT567',
// }
// const secondObject = {
//  'fullName' : 'James Peter',
//  'productName' : 'Powerbank',
//  'price' : 200,
//  'orderId' : 'IUT567',
// }
// const price = firstObject.price
// if (price >= 1000) {
//  console.log('This is a valid product');
// } else {
//  console.log('This is an invalid product');
// }

// Equality 
// ===, !==, &&, ||, >, <, >==, <==,
const user1 = {
 'firstName' : 'Sam',
 'lastName' : 'Akpan',
 'gender' : 'male',
 'age' : 45,
 'role' : 'administrator',
}
const user2 = {
 'firstName' : 'Matthew',
 'lastName' : 'Ben',
 'gender' : 'male',
 'age' : 33,
 'role' : 'member',
}
const user3 = {
 'firstName' : 'Lilian',
 'lastName' : 'James',
 'gender' : 'female',
 'age' : 52,
 'role' : 'administrator',
}

// Check across the three object, which of the bject has the gender of female
// and return the object's firstNamem and lastName

const gender1 = user1.gender;
const gender2 = user2.gender;
const gender3 = user3.gender;

if (gender1 === 'male') {
 console.log(`This ${user1.firstName} ${user1.lastName} is an engineer`);
}else if (gender2 === 'male') {
 console.log(`This ${user2.firstName} ${user2.lastName} is an engineer`);
}else if (gender3 === 'male') {
 console.log(`This ${user3.firstName} ${user3.lastName} is not an engineer`);
}
if (gender2 === 'male' && gender1 === 'male') {
 console.log(`This ${user1.firstName} and ${user2.firstName} are both engineers`);
}
if (gender2 === 'male' && gender3 === 'male') {
 console.log(`This ${user2.firstName} ${user3.firstName} is an engineer`);
}
