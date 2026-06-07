import ProductTitle from '@/features/products/components/productTitle'
import ProductBody from '@/features/products/components/productBody'
import ProductActions from '@/features/products/components/productActions'
import { AiOutlineHeart } from "react-icons/ai"
import Product from '@/assets/product.webp'
import { IoEye } from "react-icons/io5"

function ProductDetails() {

    return (
        <div className='flex flex-col gap-10 m-5'>
            <div className=''>
                <ProductTitle />
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-5 gap-5'>
                <div className='col-span-3 sm:col-span-2'>
                    <div className='relative aspect-square group'>
                        <img className='rounded-xl w-full h-full object-cover object-center' src={Product} alt='Product Image' />
                        <button className='flex items-center justify-center absolute top-2.5 right-2.5 bg-slate-900/40 group-hover:bg-slate-900/80 w-8 h-8 rounded-full duration-300 transition-all'>
                            <IoEye className='text-white' />
                        </button>
                    </div>
                </div>
                <div className='col-span-3 sm:col-span-3'>
                    <ProductBody />
                </div>
            </div>

            <div className='flex items-center gap-5'>
                <div className='flex-1'><ProductActions /></div>
                <button className=''><AiOutlineHeart className='text-text-main size-6 sm:size-8 transition-all duration-300' /></button>
            </div>
        </div>
    )
}

export default ProductDetails;