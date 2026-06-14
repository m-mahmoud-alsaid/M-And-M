import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsGrid from '@/components/ui/productsGrid'
import { BiSort } from "react-icons/bi"
import useFetch from '@/hooks/useFetch'
import endpoints from '@/features/products/api/endpoints'
import getProducts from '@/api/services/get'

function CategoryProducts() {
    const [isSortClicked, setIsSortClicked] = useState(false);
    const { category } = useParams();
    const { data: products, loading } = useFetch(getProducts, endpoints.getCategoryProducts(category));

    if (loading) return <p className='text-text-main text-4xl'>Loading...</p>

    const handleSortClicked = () => {
        setIsSortClicked(prev => !prev);
    };

    return (
        <div className='m-2.5 md:m-5'>
            <div className='flex justify-between items-center mb-5 '>
                <p className='flex flex-col gap-2 text-text-main'>
                    <span className='capitalize font-bold text-2xl md:text-3xl lg:text-4xl transition-all duration-300'>
                        {category}
                    </span>
                    <span className='text-text-muted text-base md:text-lg duration-300 transition-all'>
                        &quot;{products.total} of {products.total} items&quot;
                    </span>
                </p>
                <div onClick={handleSortClicked} className='relative'>
                    <ul className={`overflow-hidden border-3 border-border absolute z-50 top-[200%] -left-36 sm:-left-52 bg-bg-secondary text-text-main cursor-pointer rounded-xl w-36 sm:w-52 transition-all duration-300 origin-top
                        ${isSortClicked ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
                        <li className='p-2.5 hover:bg-border-hover hover:underline hover:underline-offset-4 duration-300 transition-all'>Sort by title & order asc</li>
                        <li className='p-2.5 hover:bg-border-hover hover:underline hover:underline-offset-4 duration-300 transition-all'>Sort by title & order desc</li>
                        <li className='p-2.5 hover:bg-border-hover hover:underline hover:underline-offset-4 duration-300 transition-all'>Sort by price & order asc</li>
                        <li className='p-2.5 hover:bg-border-hover hover:underline hover:underline-offset-4 duration-300 transition-all'>Sort by title & order desc</li>
                    </ul>

                    <BiSort className='hover:scale-125 transition-all duration-300 cursor-pointer text-text-muted text-xl md:text-2xl' />
                </div>
            </div>
            <ProductsGrid products={products} />
        </div>
    )
}

export default CategoryProducts;