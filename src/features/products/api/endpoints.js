const Endpoints = {
    getCategoryProducts: (category) => `products/category/${category}?sortBy=price&order=asc`,
    getSingleProduct: (id) => `products/${id}`
}

export default Endpoints;