const {API_URL}=require('./Config')


const getAllSalesApi=async(params,interval_type)=>{
  try{

    const sales_api = await fetch(`${API_URL}/get_sales_cost_diff`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          params: params,
          interval_type: interval_type,
        }),
      });
    
      const sales_response = await sales_api.json();
      return sales_response;
    }
    catch(err){
      console.log(err)
      return {}
    }
}

module.exports={getAllSalesApi}