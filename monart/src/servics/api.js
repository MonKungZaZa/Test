
const BASE_URL = 'https://dummyjson.com'

export const api = {

    getProducts: async (limit = 30, skip = 0) => {
        const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip} `);
        return response.json();
    },

    getProduct: async (id) => {
        const response = await fetch(`${BASE_URL}/products/${id}`)
        return response.json();
    },

    searchProducts: async (query) => {
        const response = await fetch(`${BASE_URL}/products/search?q=${query}`)
        return response.json();
    },

    getCategories: async () => {
        const response = await fetch(`${BASE_URL}/products/catagories`);
        return response.json();
    },

    getProductByCategory: async (catagory) => {
        const response = await fetch(`${BASE_URL}/products/catagory/${catagory}`);
        return response.json();
    },

}