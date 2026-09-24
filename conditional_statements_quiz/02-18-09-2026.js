/***
 * An assignment
 */

const order = {
 'customerName' : 'Treasure',
 'restaurantName' : 'BelleFull Place',
 'totalAmount' : 6000,
 'deliveryDistance' : '6km',
};
const order2 = {
 'customerName' : 'Roland',
 'restaurantName' : 'BelleFull Place',
 'totalAmount' : 8000,
 'deliveryDistance' : '15km',
};
if (order.totalAmount >= 5000) {
 console.log('free delivery');
}else {
 console.log('no free delivery');
};
// If the totalAmount is >= 5000, and the customer's order totals exactly 5000. 
 // Yes, the order would qualify for free order. Because the rule states there's only free delivery
 // if totalAmount is greater than or equal to 5000. so therefore the conditon is satisfied.

if (order2.totalAmount >= 5000 && order2.deliveryDistance <= '10km') {
 console.log('free delivery');
}else {
 console.log('no free delivery');
};
/**
 * a customer cannot get free delivery if he/she spends 8000 but lives 15km away
 * because the condition is not met
 * the AND operator has to confirm both conditions for it to bring out true
 */
const driver1 = {
 'driverName' : 'Musa',
 'status' : 'busy',
};
const driver2 = {
 'driverName' : 'Ahmed',
 'status' : 'available',
};
const driver3 = {
 'driverName' : 'Banko',
 'status' : 'offline',
};
if (driver1.status === 'available') {
 console.log(`${driver1.driverName} is available`);
} else if (driver2.status === 'available') {
 console.log(`${driver2.driverName} is available`);
} else if (driver3.status === 'available') {
 console.log(`${driver3.driverName} is available`);
};

/**
 * If driver1 JavaScript will not bother to check driver3 and driver3, because the condition 
 * has already been met by driver1. Therefore it skips other conditions. But when 
 * the driver1 does not meet the condition, the if/else statement goes to the next driver
 * and it continues like that until it finds the right driver that meets the condition
 */