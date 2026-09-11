
/***
 * Create a function that returns a list of payment object. Each of the payment object 
 * contain fields such as:
 * userId
 * totalAmmount
 * card_number
 * exp_month
 * exp_year
 * arn
 * transactionId
 * createdAt
 * updatedAt
 */

function getTransaction() {
 const payments = [
  {
   'userId' : 'ERT235',
   'totatlAmmount' : 50000,
   'card_number' : '67809YTR',
   'exp_month' : '67809YTR',
   'exp_year' : '67809YTR',
   'arn' : '67809YTR',
   'transactionId' : '67809YTR',
   'createdAt' : '67809YTR',
   'updatedAt' : '67809YTR',
  }
 ]
 return payments
}
console.log(getTransaction());
