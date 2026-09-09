// Create an array called tenants. each object of the tenant array
// contains keys such as : Tenant id, tenant name, created at,
// status, owner id, slug, settings
// The setting is an object which contains keys like : timezone,
// currency, locality.

const tenants = [
 {
  'tenant id' : 'EIP123',
  'tenant name' : 'IUYH4R', 
  'created at' : '11 June 2026',
  'status' : 'active',
  'owner id' : '190ITG',
  'slug' : 'later',
  'settings' : [
   {
    'timezone' : '15:30CAT',
    'currency' : 'dollars$',
    'locality' : 'africa',
   }
  ]
 }
]

console.log(tenants);
