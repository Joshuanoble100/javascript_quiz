// HOW DO YOU REPRESENT ARRAY
const firstName = ['peter', 'Josh', 'stan', 'matt'];
// CREATE AN ARRAY CALLED TRANSACTIONS. IT CONTAINS A LIST OF OBJECTS. EACH OBJECTS HAS KEYS SUCH AS 
// A TRANSACTION ID, USER ID, AMMOUNT, PRODUCT ID, ORDER ID, ORDER ITEMS.
// ORDER ITEMS HAS A VALUE OF ARRAY OF OBJECTS. EACH OBJECT HAS VARIOUS KEYS SUCH AS:
// THE PRODUCT NAME, PRODUCT DESC, PRODUCT PRICE

const Transactions = [
 {
  'transaction id' : 'WRT456',
  'user id' : 'TYU9U7',
  'ammount' : 12000,
  'product id' : '239UY6',
  'order id' : '98HHR',
  'order items' : [
   {
    'product name' : 'Gucci bags',
    'product description' : 'luxury bags',
    'product price' : 4000,
    'quantity' : 3
   }
  ]
 },
 {
  'transaction id' : '55RTI',
  'user id' : '123ABC',
  'ammount' : 15000,
  'product id' : 'RKL903',
  'order id' : 'FTY090',
  'order items' : [
   {
    'product name' : 'Gucci bags',
    'product description' : 'luxury bags',
    'product price' : 3000,
    'quantity' : 5
   }
  ]
 }

]

console.log(Transactions);

