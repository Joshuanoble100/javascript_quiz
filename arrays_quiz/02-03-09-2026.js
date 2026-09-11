// Create an array called tenants. each object of the tenant array
// contains keys such as : Tenant id, tenant name, created at,
// status, owner id, slug, settings
// The setting is an object which contains keys like : timezone,
// currency, locality.

const tenants = [
 {
  'tenantId' : 'EIP123',
  'tenantName' : 'IUYH4R', 
  'createdAt' : '11 June 2026',
  'status' : 'active',
  'ownerId' : '190ITG',
  'slug' : 'later',
  'settings' : [
   {
    'timezone' : '15:30CAT',
    'currency' : 'USD',
    'locality' : 'africa',
   }
  ]
 }
]

console.log(tenants);
