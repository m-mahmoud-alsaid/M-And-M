import QuantityCounter from '@/components/ui/quantityCounter'

function ProductBody({ product }) {

    return (
        <div className='flex flex-col gap-5 h-full justify-start'>
            <strong className='text-text-main text-lg md:text-2xl'>{product?.price}</strong>
            <p className='max-h-52 overflow-y-auto text-lg ms:text-xl text-text-muted duration-300 transition-all'>{product?.description || 'no description'}</p>
            <p className='text-lg ms:text-xl text-[#40B44A] font-medium duration-300 transition-all capitalize'>{product?.availabilityStatus || 'unknown'}</p>
            <p className='flex gap-2.5 text-text-muted text-lg md:text-xl transition-all duration-300'>
                {product?.tags.map((value, index) => (
                    <span key={index} className='cursor-pointer hover:underline hover:underline-offset-4'>
                        <span className=''>#</span>
                        <span className=''>{value}</span>
                    </span>
                ))}
            </p>
            <QuantityCounter />
        </div>
    )
}

export default ProductBody;