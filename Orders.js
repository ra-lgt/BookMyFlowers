const {API_URL}=require('./Config')


const getAllOrdersWeekAPI = async (params, interval_type) => {
  try {
    // Build query parameters
    const queryParams = new URLSearchParams({
      params: params, // Serialize params if it's an object
      interval_type: interval_type,
    }).toString();

    // Fetch data with GET method
    const orders_api = await fetch(`${API_URL}/get_orders_week_diff?${queryParams}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const orders_response = await orders_api.json();
    return orders_response;
  } catch (err) {
    console.error(err);
    return {};
  }
};

const getAllOrdersAPI=async(included_keys)=>{

  try{
    const get_orders = await fetch(`${API_URL}/get_all_orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(included_keys), // Send the parameters as a JSON object
    });

    let get_orders_res=await get_orders.json()

    return get_orders_res
  }
  catch(err){
    console.log(err)
    return {}
  }
}

module.exports={getAllOrdersWeekAPI,getAllOrdersAPI}