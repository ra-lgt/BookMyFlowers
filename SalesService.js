const {API_URL}=require('./Config')


const getAllSalesApi=async(params,return_type)=>{
    const sales_api = await fetch(`${API_URL}/get_sales_cost_diff`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          params: params,
          return_type: return_type,
        }),
      });
    
      const sales_response = await sales_api.json();
      return sales_response;
}

module.exports={getAllSalesApi}