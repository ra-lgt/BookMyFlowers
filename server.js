const express = require('express');
const path = require('path');
const {getAllProductsAPI,getSalesBasedProductAPI}=require('./Products')
const {getAllOrdersApi}=require('./Orders')
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
  const sales_based_product_param={
    from_timestamp:0,
    to_timestamp:99999999999,
    sort_by:"desc"
  }

  // const [product_counts, orders_counts,customers_counts,sales_count] = await Promise.all([
  //   // getAllProductsApi({ fields: "id" }, "count"),
  //   // getAllOrdersApi({ fields: "id"}, "count"),
  //   // getAllCustomersApi({fields:"id"}, "count"),
  //   // getAllSalesApi({ fields: "id"}, "count")

  // ]);
  const {product_counts, orders_counts,customers_counts,sales_count}={product_counts:0,orders_counts:0,customers_counts:0,sales_count:0}

  const sales_based_product=await getSalesBasedProductAPI(sales_based_product_param)
  console.log(sales_based_product)

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

  




  res.render('dashboard', { product_counts,orders_counts,customers_counts,sales_count, getSafeValue,currentYear,sales_based_product,percentage_mapping });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
