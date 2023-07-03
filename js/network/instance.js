export const BASE_URL = "https://fakestoreapi.com/products";

const instance = axios.create({
  baseUrl: BASE_URL,
});

export const network = {
  getAllProducts: async (url) => {
    let response = [];

    await instance
      .get(`${url}`)
      .then((data) => {
        response = data.data;
      })
      .catch((err) => {
        throw err;
      });

    return response;
  },
  getAllCategories: async (url) => {
    let response = [];

    await instance
      .get(`${url}/categories`)
      .then((data) => {
        response = data.data;
      })
      .catch((err) => {
        throw err;
      });

    return response;
  },
};
