import ProductsGrid from '@/components/ui/productsGrid'
import { MdOutlineDoubleArrow } from "react-icons/md"

function ProductSection() {
    const sections = [
        {
            id: 1,
            title: 'explore our products'
        },
        {
            id: 2,
            title: 'explore our smart phones'
        },
        {
            id: 3,
            title: 'explore our beauty'
        },
    ];

    return (
        <div className='grid grid-cols-1 gap-15 m-2.5 mt-10 mb-10 md:m-5 md:mb-10 md:mt-10'>
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
                    <ProductsGrid />
                </div>
            ))}
        </div>
    )
}

export default ProductSection;