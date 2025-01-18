const {API_URL}=require('./Config')


const getAllOrdersApi = async (params, return_type) => {

    const orders_api = await fetch(`${API_URL}/get_all_orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          params: params,
          return_type: return_type,
        }),
      });
    
      const orders_response = await orders_api.json();
      return orders_response;

}

module.exports={getAllOrdersApi}