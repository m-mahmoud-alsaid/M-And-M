import ProductsGrid from '@/components/ui/productsGrid'
import { BiSort } from "react-icons/bi"

function CategoryProducts() {

    return (
        <div className='m-2.5 md:m-5'>
            <div className='flex justify-between items-center mb-5 '>
                <p className='flex flex-col gap-2 text-text-main'>
                    <span className='font-bold text-2xl md:text-3xl lg:text-4xl transition-all duration-300'>
                        beauty
                    </span>
                    <span className='text-text-muted text-base md:text-lg duration-300 transition-all'>
                        &quot;20 of 1000&quot;
                    </span>
                </p>
                <BiSort className='hover:scale-125 transition-all duration-300 cursor-pointer text-text-muted text-xl md:text-2xl' />
            </div>
            <ProductsGrid />
        </div>
    )
}

export default CategoryProducts;