import get from '@/api/services/get'

function getSingleProduct(endpoint) {
    return get(endpoint);
}

export default getSingleProduct;