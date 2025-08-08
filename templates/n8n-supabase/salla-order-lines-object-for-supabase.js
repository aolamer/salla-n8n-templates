// Extract orderLineRecords from the first object in the array
const orderLineRecords = $input.first().json.orderLineRecords;

// Return each order line record as a separate item for n8n to loop through
return orderLineRecords.map(record => ({ json: record }));