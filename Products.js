const { API_URL } = require("./Config");

const getAllProductsApi = async (params, interval_type) => {
  try {
    const products_api = await fetch(`${API_URL}/get_all_products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        params: params,
        interval_type: interval_type,
      }),
    });

    const products_response = await products_api.json();
    return products_response;
  } catch (err) {
    console.log(err);
    return {};
  }
};

module.exports = { getAllProductsApi };
