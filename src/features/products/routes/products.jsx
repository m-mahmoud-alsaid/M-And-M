import ProductDetails from '@/features/products/components/productDetails'
import { useParams } from 'react-router-dom'

function Products() {
    const { id } = useParams();

    return (
        <>
            <ProductDetails id={id} />
        </>
    )
}

export default Products;