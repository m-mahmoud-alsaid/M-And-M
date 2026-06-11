import CategoryList from '@/features/home/components/categoryList'
import Sections from '@/features/home/components/sections'

function Hero() {

    return (
        <div className='m-2.5 max-h-96 overflow-y-auto md:m-5 md:gap-5 flex gap-2.5'>
            <div className='max-h-96'>
                <CategoryList />
            </div>
            <Sections />
        </div>
    )
}

export default Hero;