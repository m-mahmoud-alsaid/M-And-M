import Image from '@/assets/product.webp'

function Products() {

    return (
        <div className='border-2 border-border border-dashed rounded-xl overflow-hidden'>
            <table className='w-full'>
                <thead className='bg-bg-secondary'>
                    <tr className='capitalize text-text-main text-xl md:text-2xl transition-all duration-300'>
                        <th className='pl-2.5 pr-2.5 sm:pl-5 sm:pr-5 pt-2.5 pb-2.5 transition-all duration-300'>product</th>
                        <th className='pl-2.5 pr-2.5 sm:pl-5 sm:pr-5 pt-2.5 pb-2.5 transition-all duration-300'>price</th>
                        <th className='pl-2.5 pr-2.5 sm:pl-5 sm:pr-5 pt-2.5 pb-2.5 transition-all duration-300'>quantity</th>
                        <th className='pl-2.5 pr-2.5 sm:pl-5 sm:pr-5 pt-2.5 pb-2.5 transition-all duration-300'>total</th>
                    </tr>
                </thead>
                <tbody className='border-t-2 border-border border-dashed'>
                    <tr className='capitalize text-text-main text-base md:text-lg transition-all duration-300'>
                        <td className='flex items-center justify-center md:gap-2.5 pl-2.5 pr-2.5 sm:pl-5 sm:pr-5 pt-5 pb-5 transition-all duration-300'>
                            <img className='rounded-lg aspect-square object-center object-cover max-w-0 md:max-w-28 duration-500 transition-all' src={Image} alt='product image' />
                            <span className=''>Iphone 13 pro</span>
                        </td>
                        <td className='text-center pl-2.5 pr-2.5 sm:pl-5 sm:pr-5 pt-5 pb-5 transition-all duration-300'>$999</td>
                        <td className='text-center pl-2.5 pr-2.5 sm:pl-5 sm:pr-5 pt-5 pb-5 transition-all duration-300'>2</td>
                        <td className='text-center pl-2.5 pr-2.5 sm:pl-5 sm:pr-5 pt-5 pb-5 transition-all duration-300'>$1998</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Products;