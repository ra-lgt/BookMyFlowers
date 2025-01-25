const {API_URL}=require('./Config')


const getAllSalesApi = async (params, interval_type) => {
  try {
    // Build query parameters
    const queryParams = new URLSearchParams({
      params: params, // Serialize params if it's an object
      interval_type: interval_type,
    }).toString();

    // Fetch data with GET method
    const sales_api = await fetch(`${API_URL}/get_sales_cost_diff?${queryParams}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const sales_response = await sales_api.json();
    return sales_response;
  } catch (err) {
    console.log(err);
    return {};
  }
};



const getAllVendorsAPI=async()=>{
  try{
    const get_vendors=await fetch(`${API_URL}/get_all_vendors`)

    let get_vendors_res=await get_vendors.json()

    return get_vendors_res
  }
  catch(err){
    console.log(err)
    return {}
  }
}

module.exports={getAllSalesApi,getAllVendorsAPI}