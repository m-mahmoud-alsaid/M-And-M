import Hero from '@/features/home/components/hero'
import Services from '@/features/home/components/services'
import ProductsGrid from '@/components/ui/productsGrid'

function HomeContent() {

    return (
        <>
            <Hero />
            <Services />
            <div className='m-2.5 md:m-5'>
                <p className='capitalize mb-5 font-bold text-text-main text-lg sm:text-xl md:text-2xl transition-all duration-300'>
                    explore our products
                </p>
                <ProductsGrid />
            </div>
        </>
    )
}

export default HomeContent;