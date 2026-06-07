import { TiStarFullOutline } from "react-icons/ti"

function ProductTitle() {

    return (
        <>
            <h2 className='font-bold text-text-main text-lg sm:text-xl md:text-2xl transition-all duration-300 mb-2.5'>Iphone 13 pro</h2>
            <p className='flex items-center gap-5 text-text-muted text-base sm:text-lg md:text-xl duration-300 transition-all'>
                <span className='flex items-center gap-2'>
                    <span className=''>5</span>
                    <span className='text-stars'><TiStarFullOutline /></span>
                </span>
                <span className='text-white bg-sale p-2 pt-1 pb-1 rounded-lg'>75%</span>
            </p>
        </>
    )
}

export default ProductTitle;