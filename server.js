const express = require('express');
const path = require('path');
const {getAllProductsAPI,getSalesBasedProductAPI,getAllProductDetailsAPI}=require('./Products')
const {getAllOrdersWeekAPI,getAllOrdersAPI}=require('./Orders')
const {getAllCustomersApi,getCustomerReviewAPI}=require('./Customers')
const {getAllSalesApi}=require('./SalesService')
const app = express();
const PORT = 3000;

function getSafeValue(data, key, fallback = ':( unexpected error') {
  return data && data[key] !== undefined ? data[key] : fallback;
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));
 


app.get('/', async(req, res) => {
  const currentYear = new Date().getFullYear();
  let sales_based_product_param={
    from_timestamp:0,
    to_timestamp:99999999999,
    sort_by:"desc"
  }

  // const [product_counts, orders_counts,customers_counts,sales_count] = await Promise.all([
  //   // getAllProductsApi({ fields: "id" }, "count"),
  //   // getAllOrdersWeekAPI({ fields: "id"}, "count"),
  //   // getAllCustomersApi({fields:"id"}, "count"),
  //   // getAllSalesApi({ fields: "id"}, "count")

  // ]);
  const {product_counts, orders_counts,customers_counts,sales_count}={product_counts:0,orders_counts:0,customers_counts:0,sales_count:0}

  const sales_based_product_desc=await getSalesBasedProductAPI(sales_based_product_param)
  sales_based_product_param['sort_by']="asc"

  const sales_based_product_asc=await getSalesBasedProductAPI(sales_based_product_param)

  let review_mapping={
    "1":0,
    "2":0,
    "3":0,
    "4":0,
    "5":0
  }


  const get_customer_review=await getCustomerReviewAPI()

  let total_reviews = 0;

  get_customer_review?.forEach((value) => {
    const rating = value?.[2];
    if (rating) {
      review_mapping[rating] += 1;
      total_reviews += 1; // Increment total reviews while counting
    }
  });

  // Calculate percentage mapping
  let percentage_mapping = {};
  for (let rating in review_mapping) {
    percentage_mapping[rating] =
      total_reviews > 0 ? ((review_mapping[rating] / total_reviews) * 100).toFixed(2) : 0;
  }

  

  // product_counts['is_positive']=((product_counts?.data?.percentage_change)?.includes('+'))?true:false
  
  // orders_counts['is_positive']=((orders_counts?.data?.percentage_change)?.includes('+'))?true:false

  // customers_counts['is_positive']=((customers_counts?.data?.percentage_change)?.includes('+'))?true:false

  // sales_count['is_positive']=((sales_count?.data?.percentage_change)?.includes('+'))?true:false

  




  res.render('dashboard', { product_counts,orders_counts,customers_counts,sales_count, getSafeValue,currentYear,sales_based_product_desc,percentage_mapping,sales_based_product_asc });
});

app.get('/products', async(req, res) => {
  const products = await getAllProductDetailsAPI({
    "_fields": "name,date_created,stock_status,price,total_sales,images,store,average_rating"
  });
  const total_products=products?.length || 0

  const total_in_stock = products?.filter((product) => product.stock_status === 'instock')?.length || 0;

  const total_out_of_stock = products?.filter((product) => product.stock_status === 'outofstock')?.length || 0;

  const total_price=products?.reduce((acc, product) => acc + parseFloat(product.price), 0) || 0

  console.log(products)
  res.render('products',{total_products,total_in_stock,total_out_of_stock,total_price,products});
})


app.get('/orders', async(req, res) => {
  const orders = await getAllOrdersAPI({
    "included_keys": ['id,date_created', 'total', 'billing', 'status', 'payment_method_title', 'line_items', 'store']

  });

  const total_orders=orders?.length || 0

  const total_sales = orders?.reduce((acc, order) => acc + parseFloat(order.total), 0) || 0;

  const total_failed = orders?.filter((order) => order.status === 'failed')?.length || 0;

  const total_completed = orders?.filter((order) => order.status === 'completed')?.length || 0;

  res.render('orders',{total_orders,total_sales,total_failed,total_completed,orders});
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
