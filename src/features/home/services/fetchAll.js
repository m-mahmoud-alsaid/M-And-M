import get from '@/api/services/get'

function getProducts(endpoint) {
    return get(endpoint);
}

export default getProducts;