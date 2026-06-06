import CategoryList from '@/components/ui/categoryList'
import Sections from '@/components/ui/sections'

function Hero() {

    return (
        <div className='m-2.5 md:m-4 md:gap-5 flex gap-2.5'>
            <CategoryList />
            <Sections />
        </div>
    )
}

export default Hero;