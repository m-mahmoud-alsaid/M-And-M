import ProductCard from '@/components/ui/productCard'

function ProductsGrid() {

    return (
        <div className='grid gap-2.5 md:gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default ProductsGrid;