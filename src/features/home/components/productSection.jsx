import ProductsGrid from '@/components/ui/productsGrid'
import { MdOutlineDoubleArrow } from "react-icons/md"
import useFetch from '@/hooks/useFetch'
import getProducts from '@/features/home/services/fetchAll'
import products from '@/features/home/api/products'

function ProductSection() {
    const { data: all, loading: allLoading } = useFetch(getProducts, products.getAllProducts);
    const { data: smartPhones, smartPhonesLoading } = useFetch(getProducts, products.getProductsByCategory('smartPhones'));
    const { data: groceries, loading: groceriesLoading } = useFetch(getProducts, products.getProductsByCategory('groceries'));

    const sections = [
        {
            id: 1,
            title: 'all products',
            products: all
        },
        {
            id: 2,
            title: 'explore our smart phones',
            products: smartPhones
        },
        {
            id: 3,
            title: 'explore our groceries',
            products: groceries
        },
    ];

    if (allLoading || smartPhonesLoading || groceriesLoading) return <p className='text-3xl text-text-main'>Loading...</p>

    return (
        <div className='my-fade-in grid grid-cols-1 gap-15 m-2.5 mt-10 mb-10 md:m-5 md:mb-10 md:mt-10'>
            {sections.map(value => (
                <div key={value.id} className='animate-grow'>
                    <p className='flex justify-between items-center capitalize mb-5 font-bold transition-all duration-300'>
                        <span className='text-text-main text-xl md:text-2xl'>{value.title}</span>
                        <span className='flex items-center gap-2.5 text-sm md:text-base text-text-main'>
                            <span className=''>
                                see all
                            </span>
                            <span className=''>
                                <MdOutlineDoubleArrow />
                            </span>
                        </span>
                    </p>
                    <ProductsGrid products={value.products} />
                </div>
            ))}
        </div>
    )
}

export default ProductSection;