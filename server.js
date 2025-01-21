const express = require('express');
const path = require('path');
const {getAllProductsAPI,getSalesBasedProductAPI}=require('./Products')
const {getAllOrdersApi}=require('./Orders')
const {getAllCustomersApi}=require('./Customers')
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

  

  // product_counts['is_positive']=((product_counts?.data?.percentage_change)?.includes('+'))?true:false
  
  // orders_counts['is_positive']=((orders_counts?.data?.percentage_change)?.includes('+'))?true:false

  // customers_counts['is_positive']=((customers_counts?.data?.percentage_change)?.includes('+'))?true:false

  // sales_count['is_positive']=((sales_count?.data?.percentage_change)?.includes('+'))?true:false

  




  res.render('dashboard', { product_counts,orders_counts,customers_counts,sales_count, getSafeValue,currentYear,sales_based_product });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
