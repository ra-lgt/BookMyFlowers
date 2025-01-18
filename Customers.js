const {API_URL} = require('./Config')


const getAllCustomersApi = async (params, return_type) => {
    const customers_api = await fetch(`${API_URL}/get_all_customers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          params: params,
          return_type: return_type,
        }),
      });
    
      const customers_response = await customers_api.json();
      return customers_response;
}
module.exports={getAllCustomersApi}