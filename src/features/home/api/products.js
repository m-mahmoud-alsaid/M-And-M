const productsEndpoints = {
    getAllProducts: `products`,
    getProductsByCategory: (category) => `products/category/${category}`,
    getAllCategories: `products/category-list`
};

export default productsEndpoints;