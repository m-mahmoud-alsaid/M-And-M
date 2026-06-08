import CategoryList from '@/features/home/components/categoryList'
import Sections from '@/features/home/components/sections'

function Hero() {

    return (
        <div className='m-2.5 md:m-5 md:gap-5 flex gap-2.5'>
            <CategoryList />
            <Sections />
        </div>
    )
}

export default Hero;