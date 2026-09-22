/***
 * You have two restaurant objects, each with fields: 
 * restaurantName, cuisineType, and status (which can be 'open' or 'closed'). 
 * You want to confirm both restaurants' status fields equal 'open' 
 * before showing a "combo deal" between them. 
 * Which comparison and logical operator would you use to express 
 * "restaurant1's status equals 'open' AND restaurant2's status equals 'open'"? 
 * What happens if restaurant1's status is 'open' but restaurant2's status is 'closed'?
 */

const restaurant1 = {
 'restaurantName' : 'Chop and be filled',
 'cuisineType' : 'African',
 'status' : 'open',
};
const restaurant2 = {
 'restaurantName' : 'Taste of Africa',
 'cuisineType' : 'African',
 'status' : 'open',
};
if (restaurant1.status === 'open' && restaurant2.status === 'open') {
 console.log(`You've got a combo deal`);
};
// If restaurant1 status is open but restaurant2 status is closed,
// Then the condition will not be met, and the console.log statement will not display anything. 

/***
 * Using the same two restaurant objects (fields: restaurantName, cuisineType, status), 
 * you now only need at least one of the two restaurants' status fields to be 
 * 'open' to show a limited menu. Which logical operator fits this requirement, 
 * and how does its result differ from the one in Question 1 
 * when only one restaurant's status is 'open'?
 */
if (restaurant1.status === 'open' || restaurant2.status === 'open') {
 console.log(`Open for a limited menu.`);
};
//The result differs from the one in question 1 because with || (OR) 
// if only one restaurant is open the result it true and the console would display.
// but the && makes both condition same before it displays.

/***
 * A developer colleague is validating free delivery eligibility on an order object with fields: 
 * customerName, restaurantName, totalAmount, deliveryDistance. 
 * They write if (totalAmount => 5000) instead of if (totalAmount >= 5000). 
 * What's wrong with this, and what would actually happen when this code runs?
 */

const order = {
 'customerName' : 'Stark',
 'restaurantName' : 'Tasty Place',
 'totalAmount' : '6000',
 'deliveryDistance' : '6km',
};
// if (order.totalAmount => 5000) {
//  console.log('free delivery');
// }
// The issue with the code is that => is not a valid comparison operator in JavaScript.
// the correct operator for "greater than or equal to" is >=. Therfore:
if (order.totalAmount >= 5000) {
 console.log(`free delivery`);
};
/**
 * Suppose the order object's totalAmount field was accidentally stored as the string 
 * "6000" instead of the number 6000. 
 * Would totalAmount >= 5000 still correctly identify the order as qualifying for free delivery? 
 * Would your answer change if the check used === to compare totalAmount === 5000 instead of >=?
 */

