import Image from '@/assets/product.webp'
import useTheme from '@/stores/theme/useTheme'

function ProductCard({ details }) {
    const { theme } = useTheme();

    return (
        <div onClick={() => console.log('Clicked.')} className={`isolate before:block before:absolute before:inset-0 ${theme === 'light' ? 'before:bg-[linear-gradient(90deg,rgba(30,41,59,0)_10%,rgba(255,255,255,0.3)_50%,rgba(30,41,59,0)_90%)]' : 'before:bg-[linear-gradient(90deg,transparent,rgba(100,116,139,0.2)_50%,transparent)]'} before:animate-glassy-shimmer before:text-black before:z-10 before:pointer-events-none relative z-0 cursor-pointer shadow-lg group shadow-shadow-md bg-bg-secondary text-text-main rounded-2xl overflow-hidden border border-border hover:scale-90 duration-300 transition-all`}>
            <div className='relative aspect-square overflow-hidden mb-2.5'>
                <img className='w-full h-full object-cover object-center group-hover:grayscale duration-300 transition-all' src={details.images || Image} alt='Product Image' />
            </div>
            <div className='relative flex flex-col gap-5 p-2.5'>
                <p className='font-bold truncate sm:text-lg md:text-xl duration-300 transition-all'>{details.title}</p>
                <p className=''>
                    <span className='flex justify-between md:text-lg duration-300 transition-all'>
                        <span className=''>${details.price}</span>
                        <span className='bg-sale rounded-lg pl-2.5 pr-2.5 text-white'>{details.discountPercentage} %</span>
                    </span>
                </p>
                <p className='truncate text-text-muted md:text-lg duration-300 transition-all'>{details.description}</p>
                <p className='flex justify-between'>
                    <span className='text-[#40B44A] capitalize font-bold md:text-lg duration-300 transition-all'>{details.availabilityStatus}</span>
                    <span className='md:text-lg duration-300 transition-all'>{details.createdAt}</span>
                </p>
            </div>
        </div>
    )
}

export default ProductCard;