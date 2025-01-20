const {API_URL}=require('./Config')


const getAllOrdersApi = async (params, interval_type) => {
  try{


    const orders_api = await fetch(`${API_URL}/get_all_orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          params: params,
          interval_type: interval_type,
        }),
      });
    
      const orders_response = await orders_api.json();
      return orders_response;
  }

  catch(err){
    console.log(err)
    return {}
  }

}

module.exports={getAllOrdersApi}