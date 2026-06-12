import ProductCard from '@/components/ui/productCard'

function ProductsGrid({ products }) {

    return (
        <div className='grid gap-5 gap-y-15 grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
            {products?.products?.map(value => (
                <ProductCard key={value.id} details={value} />
            ))}
        </div>
    )
}

export default ProductsGrid;