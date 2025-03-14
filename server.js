const express = require('express');
const path = require('path');
const session = require("express-session");
const {getAllProductsAPI,getSalesBasedProductAPI,getAllProductDetailsAPI}=require('./Products')
const {getAllOrdersWeekAPI,getAllOrdersAPI}=require('./Orders')
const {getAllCustomersApi,getCustomerReviewAPI,getAllCustomersAPIData,getCustomerDetails,getContactFormDetails}=require('./Customers')
const {getAllSalesApi,getAllVendorsAPI,getAllMailTemplateAPI}=require('./SalesService')
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; 
app.use(session({
  secret: "book_my_flowers",  // Change this to a strong secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Set `true` if using HTTPS
}));

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next(); 
  } else {
    res.redirect("/"); 
  }
}


function getSafeValue(data, key, fallback = ':( unexpected error') {
  return data && data[key] !== undefined ? data[key] : fallback;
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));
 


app.get('/home', isAuthenticated, async(req, res) => {
  const currentYear = new Date().getFullYear();
  let sales_based_product_param={
    from_timestamp:0,
    to_timestamp:99999999999,
    sort_by:"desc"
  }

  const [product_counts, orders_counts,customers_counts,sales_count] = await Promise.all([
    getAllProductsAPI({ fields: "id" }, "count"),
    getAllOrdersWeekAPI({ fields: "id"}, "count"),
    getAllCustomersApi({fields:"id"}, "count"),
    getAllSalesApi({ fields: "id"}, "count")

  ]);

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

  

  product_counts['is_positive']=((product_counts?.data?.percentage_change)?.includes('+'))?true:false
  
  orders_counts['is_positive']=((orders_counts?.data?.percentage_change)?.includes('+'))?true:false

  customers_counts['is_positive']=((customers_counts?.data?.percentage_change)?.includes('+'))?true:false

  sales_count['is_positive']=((sales_count?.data?.percentage_change)?.includes('+'))?true:false

  




  res.render('dashboard', { product_counts,orders_counts,customers_counts,sales_count, getSafeValue,currentYear,sales_based_product_desc,percentage_mapping,sales_based_product_asc });
});

app.get('/products',isAuthenticated, async(req, res) => {
  const vendor_id = req.query?.vendor_id;
  let products=undefined
  if(vendor_id!=undefined){
    products = await getAllProductDetailsAPI({
      "_fields": "name,date_created,stock_status,price,total_sales,images,store,average_rating",
      "store_id":parseInt(vendor_id)
    });
    products=products.filter((product)=>product?.store?.id===parseInt(vendor_id))


  }
  else{
    products = await getAllProductDetailsAPI({
      "_fields": "name,date_created,stock_status,price,total_sales,images,store,average_rating"
    });
  }
  
  const total_products=products?.length || 0

  const total_in_stock = products?.filter((product) => product.stock_status === 'instock')?.length || 0;

  const total_out_of_stock = products?.filter((product) => product.stock_status === 'outofstock')?.length || 0;

  const total_price=products?.reduce((acc, product) => acc + parseFloat(product.price), 0) || 0

  res.render('products',{total_products,total_in_stock,total_out_of_stock,total_price,products});
})


app.get('/orders',isAuthenticated, async(req, res) => {
  const vendor_id=req.query?.vendor_id
  let orders = await getAllOrdersAPI({
    "included_keys": ['id','date_created', 'total', 'billing', 'status', 'payment_method_title', 'line_items', 'store']

  });
  if(vendor_id!=undefined){
    orders=orders.filter((order)=>order?.store?.id===parseInt(vendor_id))
  }

  const total_orders=orders?.length || 0

  const total_sales = orders?.reduce((acc, order) => acc + parseFloat(order.total), 0) || 0;

  const total_failed = orders?.filter((order) => order.status === 'failed')?.length || 0;

  const total_completed = orders?.filter((order) => order.status === 'completed')?.length || 0;

  res.render('orders',{total_orders,total_sales,total_failed,total_completed,orders});
})


app.get('/customer_details',isAuthenticated,async (req,res) => {
  const email=req?.query?.email

  const customer_details=await getCustomerDetails(email)

  customer_details?.cart_data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));


  res.render('customer_details',{customer_details})

  
})


app.get('/customers',isAuthenticated, async(req, res) => {
  const customers = await getAllCustomersAPIData({});

  const total_customers = customers?.length || 0;

  const total_spend = customers?.reduce((acc, customer) => acc + parseFloat(customer.total_spend), 0) || 0;

  const total_orders = customers?.reduce((acc, customer) => acc + parseFloat(customer.orders_count), 0) || 0;

  const avg_spend = customers?.reduce((acc, customer) => acc + parseFloat(customer.avg_order_value), 0) || 0;

  res.render('customers',{total_customers,total_spend,total_orders,avg_spend,customers});
})

app.get('/contacts', async(req, res) => {

  const get_all_contacts=await getContactFormDetails()

  let harmonised_contact_data=[]

  get_all_contacts.map((contact) => {
    let content_array = contact?.post_content.split('\n')
    let contact_info={
      'name':content_array?.[0],
      'email':content_array?.[1],
      'mobile':content_array?.[2],
      'city':content_array?.[3],
    }
    let curr_index=4
    if(content_array.includes('collaborate-with-us')){
      contact_info['sale_category']=content_array[curr_index]
      curr_index++

    }
    Object.assign(contact_info,{
      'message':content_array?.[curr_index],
      'date_posted':contact?.post_date,
      'post_author':contact?.post_author,
      'contact_category':content_array?.[curr_index+9]
    })

    harmonised_contact_data.push(contact_info)

})
    let contact_length=harmonised_contact_data.length

    let total_collaboration_requests=harmonised_contact_data.filter((contact)=>contact?.contact_category=="Collaborate with Us").length

    let total_franchise_requests=harmonised_contact_data.filter((contact)=>contact?.contact_category=="Franchise Enquiries").length

  

  
  res.render('contacts',{harmonised_contact_data,contact_length,total_collaboration_requests,total_franchise_requests});
})

app.get('/vendors',isAuthenticated,async(req,res)=>{
  const vendors=await getAllVendorsAPI()

  const totalVendors = vendors.length;

  const averageRating = (
    vendors.reduce((sum, vendor) => sum + parseFloat(vendor.rating.rating), 0) / totalVendors
  ).toFixed(2);

  const trustedVendors = vendors.filter(vendor => vendor.trusted).length;

  const featuredVendors = vendors.filter(vendor => vendor.featured).length;


  res.render('vendors',{vendors,totalVendors,averageRating,featuredVendors,trustedVendors})



})
app.get('/leads',isAuthenticated,async(req,res)=>{
  res.render('leads')

})
app.post('/signin',async(req,res)=>{
  const email=req.body.email
  const password=req.body.password

  const check_cred=await fetch('https://book-my-flower-api.vercel.app/admin_signin',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      email:email,
      password:password
    })
  }
  )

  const check_cred_data=await check_cred.json()
  if(check_cred_data?.status_code==200){
    req.session.user = email;
    
  }
  return res.json(check_cred_data)

  
})

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      // If there's an error destroying the session, handle it
      return res.status(500).json({ message: "Logout failed", status_code: 503 });
    }

    // If session is destroyed successfully
    res.json({ message: "Logged out successfully", status_code: 200 });
  });
});

app.get('/',isAuthenticated,async(req,res)=>{
  
  res.render('home')
})

app.get('/mail_config',async(req,res)=>{
  const config_id=req.query?.id
  if(config_id!=undefined){
    let all_mail_config=await getAllMailTemplateAPI()

    all_mail_config=all_mail_config.filter((config)=>config.id===parseInt(config_id))
    
    res.render('mail_config',{mail_config_data:all_mail_config?.[0]})
  }
  else{
    res.render('mail_config',{mail_config_data:{}})

  }

})

app.get('/mail_config_table',async(req,res)=>{
  const all_mail_config=await getAllMailTemplateAPI()

  let mail_config_length=all_mail_config.length

  let low_product_count=all_mail_config.filter((config)=>config?.alert_select=="less_product_count_10").length

  let out_of_stock_count=all_mail_config.filter((config)=>config?.alert_select=="out_of_stock").length

  res.render('mail_config_table',{all_mail_config,mail_config_length,low_product_count,out_of_stock_count})

})

app.listen(PORT,HOST,() => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
