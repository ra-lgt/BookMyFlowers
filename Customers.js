const {API_URL} = require('./Config')


const getAllCustomersApi = async (params, interval_type) => {
  try{

    const customers_api = await fetch(`${API_URL}/get_all_customers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          params: params,
          interval_type: interval_type,
        }),
      });
    
      const customers_response = await customers_api.json();
      return customers_response;
    }
    catch(err){
      console.log(err)
      return {}
    }
}

const getCustomerReviewAPI=async()=>{
  try{
    
    const queryString = new URLSearchParams({
      to_timestamp: 9999999999,
    }).toString();
    
    const customers_api = await fetch(`${API_URL}/get_customer_review?${queryString}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    const customers_response = await customers_api.json();
    return customers_response;
  }
  catch(err){
    console.log(err)
    return {}
  }
}
module.exports={getAllCustomersApi,getCustomerReviewAPI}