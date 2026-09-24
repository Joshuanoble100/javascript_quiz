// HOW DO YOU REPRESENT ARRAY
const firstName = ['peter', 'Josh', 'stan', 'matt'];
// CREATE AN ARRAY CALLED TRANSACTIONS. IT CONTAINS A LIST OF OBJECTS. EACH OBJECTS HAS KEYS SUCH AS 
// A TRANSACTION ID, USER ID, AMMOUNT, PRODUCT ID, ORDER ID, ORDER ITEMS.
// ORDER ITEMS HAS A VALUE OF ARRAY OF OBJECTS. EACH OBJECT HAS VARIOUS KEYS SUCH AS:
// THE PRODUCT NAME, PRODUCT DESC, PRODUCT PRICE

const Transactions = [
 {
  'transactionId' : 'WRT456',
  'userId' : 'TYU9U7',
  'ammount' : 12000,
  'productId' : '239UY6',
  'orderId' : '98HHR',
  'order_items' : [
   {
    'product_name' : 'Gucci bags',
    'product_description' : 'luxury bags',
    'product_price' : 4000,
    'quantity' : 3
   }
  ]
 },
 {
  'transactionId' : '55RTI',
  'userId' : '123ABC',
  'ammount' : 15000,
  'productId' : 'RKL903',
  'orderId' : 'FTY090',
  'order_items' : [
   {
    'product_name' : 'Gucci bags',
    'product_description' : 'luxury bags',
    'product_price' : 3000,
    'quantity' : 5
   }
  ]
 }

]

console.log(Transactions);

