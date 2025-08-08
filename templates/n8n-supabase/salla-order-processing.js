// N8N JavaScript Code to Convert Salla Order JSON to Supabase Records
const sallaOrder = $json;
const orderData = sallaOrder.data;

// Helper function to convert date string to ISO format
function convertToISODate(dateString) {
  return new Date(dateString.replace(' ', 'T') + 'Z').toISOString();
}

// Helper function to get internal store_id from Salla store_id
// You'll need to implement this mapping based on your stores table
function getStoreId(sallaStoreId) {
  // Query your stores table or use a mapping object
  const storeMapping = {
    '1320294021': 1 // Example mapping
  };
  return storeMapping[sallaStoreId] || null;
}

// Helper function to get internal customer_id from Salla customer_id
function getCustomerId(sallaCustomerId) {
  // You might need to query your customers table
  // or create a new customer if not exists
  return sallaCustomerId; // Placeholder
}
const results = [];

  results.push({
    json: {
      
  type: 'order',
  store_id: getStoreId(orderData.store.id),
  salla_id: orderData.id,
  salla_reference_id: orderData.reference_id,
  total: parseFloat(orderData.amounts.total.amount),
  date: convertToISODate(orderData.date.date).split('T')[0],
  status: orderData.status.slug,
  salla_status: orderData.status.name,
  salla_status_id: orderData.status.id,
  source: orderData.source,
  source_device: orderData.source_details.device,
  payment_method: orderData.payment_method,
  customer_id: getCustomerId(orderData.customer.id),
  datetime: convertToISODate(orderData.date.date),
  db_datetim: new Date().toISOString()
    }
  });
// Prepare order line items
const orderLineRecords = orderData.items.map(item => ({
  store_id: getStoreId(orderData.store.id),
  product_id: item.product.id,
  sku: item.sku,
  platform_order_product_id: item.id.toString(),
  platform_order_id: orderData.id.toString(),
  platform_product_id: item.product.id.toString(),
  product_name: item.name,
  quantity: parseFloat(item.quantity),
  weight: parseFloat(item.weight),
  weight_label: item.weight_label,
  price: parseFloat(item.amounts.price_without_tax.amount),
  total: parseFloat(item.amounts.total.amount),
  total_discount: parseFloat(item.amounts.total_discount.amount),
  order_status: orderData.status.slug,
  product_status: item.product.status,
  datetime: convertToISODate(orderData.date.date)
}));
  results.push({
    json: {
      type: 'orderLine',
      orderLineRecords
    }
  });
// Handle customer data if needed
const customerRecord = {
  type: 'customer',
  store_id: getStoreId(orderData.store.id),
  first_name: orderData.customer.first_name,
  last_name: orderData.customer.last_name,
  mobile_code: orderData.customer.mobile_code,
  mobile: orderData.customer.mobile,
  email: orderData.customer.email,
  birthday: orderData.customer.birthday ? orderData.customer.birthday.date.split(' ')[0] : null,
  salla_id: orderData.customer.id
};
  results.push({
    json: {
      type: 'customer',
  store_id: getStoreId(orderData.store.id),
  first_name: orderData.customer.first_name,
  last_name: orderData.customer.last_name,
  mobile_code: orderData.customer.mobile_code,
  mobile: orderData.customer.mobile,
  email: orderData.customer.email,
  birthday: orderData.customer.birthday ? orderData.customer.birthday.date.split(' ')[0] : null,
  salla_id: orderData.customer.id
    }
  });
return results;