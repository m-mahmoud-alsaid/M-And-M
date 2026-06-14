import ProductTitle from '@/features/products/components/productTitle'
import ProductBody from '@/features/products/components/productBody'
import ProductActions from '@/features/products/components/productActions'
import Reviews from '@/features/products/components/reviews'
import { AiOutlineHeart } from "react-icons/ai"
import ProductImage from '@/assets/product.webp'
import { IoEye } from "react-icons/io5"
import useFetch from '@/hooks/useFetch'
import Endpoints from '@/features/products/api/endpoints'
import getSingleProduct from '@/features/products/services/getSingleProduct'

function ProductDetails({ id }) {
    const { data: product, loading } = useFetch(getSingleProduct, Endpoints.getSingleProduct(id));

    if (loading) return <p className='text-text-main text-4xl'>Loading...</p>

    return (
        <div className='flex flex-col gap-10 m-5 md:m-10 duration-300'>
            <div className='block sm:hidden'>
                <ProductTitle product={product} />
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-5 gap-5'>
                <div className='col-span-3 sm:col-span-2 lg:col-span-1 animate-come-from-left'>
                    <div className='relative aspect-square group overflow-hidden'>
                        <img className='group-hover:scale-125 transition-all duration-300 rounded-xl w-full h-full object-cover object-center' src={product.images[0] || ProductImage} alt='Product Image' />
                        <button className='flex items-center justify-center absolute top-2.5 right-2.5 bg-slate-900/40 group-hover:bg-slate-900/80 w-8 h-8 rounded-full duration-300 transition-all'>
                            <IoEye className='text-white' />
                        </button>
                    </div>
                </div>
                <div className='col-span-3 sm:col-span-3 lg:col-span-4 animate-come-from-right'>
                    <div className='hidden sm:block mb-5'>
                        <ProductTitle product={product} />
                    </div>
                    <ProductBody />
                </div>
            </div>

            <div className='flex items-center gap-5'>
                <div className='flex-1'><ProductActions /></div>
                <button className='hover:scale-90 transition-all duration-300'><AiOutlineHeart className='text-text-main size-6 sm:size-8' /></button>
            </div>

            <Reviews product={product} />
        </div>
    )
}

export default ProductDetails;