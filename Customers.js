const {API_URL} = require('./Config')

const getAllCustomersApi = async (params, interval_type) => {
  try {
    // Build query parameters
    const queryParams = new URLSearchParams({
      params: params, // Serialize params if it's an object
      interval_type: interval_type,
    }).toString();

    // Fetch data with GET method
    const customers_api = await fetch(`${API_URL}/get_all_customers_stat?${queryParams}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const customers_response = await customers_api.json();
    return customers_response;
  } catch (err) {
    console.error(err);
    return {};
  }
};

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

const getAllCustomersAPIData = async (params) => {
  try {
    // Build query parameters
    const queryParams = new URLSearchParams({
      params: params, // Serialize params if it's an object
    }).toString();

    // Fetch data with GET method
    const customers_api = await fetch(`${API_URL}/get_all_customers?${queryParams}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const customers_response = await customers_api.json();
    return customers_response;
  } catch (err) {
    console.error(err);
    return {};
  }
}

const getCustomerDetails=async (email)=>{
  try{
    const queryString = new URLSearchParams({
      email: email,
    }).toString();
    
    const customers_api = await fetch(`${API_URL}/get_customer_details?${queryString}`, {
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
module.exports={getAllCustomersApi,getCustomerReviewAPI,getAllCustomersAPIData,getCustomerDetails}