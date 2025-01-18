const { API_URL } = require('./Config');

const getAllProductsApi = async (params, return_type) => {
  const products_api = await fetch(`${API_URL}/get_all_products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      params: params,
      return_type: return_type,
    }),
  });

  const products_response = await products_api.json();
  return products_response;
};

module.exports = { getAllProductsApi };
