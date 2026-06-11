import Image from '@/assets/product.webp'

function ProductCard() {

    return (
        <div onClick={() => console.log('Clicked.')} className={`relative z-0 before:block before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(30,41,59,0)_10%,rgba(255,255,255,0.5)_50%,rgba(30,41,59,0)_90%)] before:animate-glassy-shimmer before:text-black before:z-10 cursor-pointer shadow-lg group shadow-shadow-md bg-bg-secondary text-text-main rounded-2xl overflow-hidden border border-border hover:scale-90 duration-300 transition-all`}>
            <div className='aspect-square overflow-hidden'>
                <img className='w-full h-full object-cover object-center group-hover:grayscale duration-300 transition-all' src={Image} alt='Product Image' />
            </div>
            <div className='p-2.5'>
                <p className='font-bold sm:text-lg md:text-xl duration-300 transition-all'>Hand Washer</p>
                <p className=''>
                    <span className='mt-2.5 flex justify-between md:text-lg duration-300 transition-all'>
                        <span className=''>$999</span>
                        <span className='bg-sale rounded-lg pl-2.5 pr-2.5 text-white'>50%</span>
                    </span>
                </p>
                <p className='mt-2.5 text-text-muted md:text-lg duration-300 transition-all'>Description</p>
                <p className='flex justify-between mt-2.5'>
                    <span className='text-[#40B44A] capitalize font-bold md:text-lg duration-300 transition-all'>in stock</span>
                    <span className='md:text-lg duration-300 transition-all'>5/5/2026</span>
                </p>
            </div>
        </div>
    )
}

export default ProductCard;