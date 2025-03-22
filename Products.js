const { API_URL } = require("./Config");

const getAllProductsAPI = async (params, interval_type) => {
  try {
    const queryParams = new URLSearchParams({
      params: JSON.stringify(params), 
      interval_type: interval_type,
    }).toString();

    // Fetch data with GET method
    const products_api = await fetch(`${API_URL}/get_all_products?${queryParams}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const products_response = await products_api.json();
    return products_response;
  } catch (err) {
    console.error(err);
    return {};
  }
};



const getAllProductDetailsAPI=async(included_keys,product_id_list=[])=>{
  const payload={
    product_id_list:product_id_list,
    included_keys:included_keys
  }

  const get_all_products_api=await fetch(`${API_URL}/get_product_details_using_id`,{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(payload)
  })

  const get_all_products_res=await get_all_products_api.json()

  return get_all_products_res
}


const getSalesBasedProductAPI=async(params)=>{
  try{
    const param = new URLSearchParams(
      params
    ).toString();
    const get_products=await fetch(`${API_URL}/get_sales_based_products?${param}`)

    let get_products_res=await get_products.json()
    get_products_res=JSON.parse(get_products_res)

    let product_lists = get_products_res?.map((value) => value?.product_id) || [];



    const get_product_details_res=await getAllProductDetailsAPI({},product_lists)

    const merge_details=get_products_res.map(item1=>{
      const item2 = get_product_details_res.find(item => item.id == item1.product_id);

      return { ...item1, ...item2 };
    })


    const final_data=merge_details?.map((value,key)=>{
      return {
        product_id:value?.product_id,
        product_name:value?.name,
        total_sold:value?.total_sold,
        image:value?.images?.[0]?.src,
        date_created:value?.date_created,
        store_name:value?.store?.name
      }
    })
    return final_data

  }
  catch(err){
    console.log(err)
    return []

  }
}




module.exports = { getAllProductsAPI,getSalesBasedProductAPI,getAllProductDetailsAPI };
