import { TiStarFullOutline } from "react-icons/ti"

function Reviews() {

    return (
        <div className='text-text-main animate-grow'>
            <p className='capitalize font-bold mb-2.5 text-lg md:text-xl duration-300 transition-all'>reviews (120)</p>
            <hr className='' />

            <div className='flex flex-col gap-8 mt-5 mb-5'>
                <div className=''>
                    <div className='flex justify-between text-text-main'>
                        <p className='flex gap-5'>
                            <span className='md:text-lg duration-300 transition-all'>Mohamed Mahmoud</span>
                            <span className='flex items-center gap-2.5'>
                                <span className='text-text-muted md:text-lg duration-300 transition-all'>3</span>
                                <span className='text-stars'><TiStarFullOutline className='md:size-5 duration-300 transition-all' /></span>
                            </span>
                        </p>
                        <p className='text-text-muted md:text-lg duration-300 transition-all'>7/6/2026</p>
                    </div>
                    <p className='text-text-muted mt-2.5'>Very unhappy with my purchase!</p>
                </div>
                <div className=''>
                    <div className='flex justify-between text-text-main'>
                        <p className='flex gap-5'>
                            <span className='md:text-lg duration-300 transition-all'>Zeinab Ahmed</span>
                            <span className='flex items-center gap-2.5'>
                                <span className='text-text-muted md:text-lg duration-300 transition-all'>3</span>
                                <span className='text-stars'><TiStarFullOutline className='md:size-5 duration-300 transition-all' /></span>
                            </span>
                        </p>
                        <p className='text-text-muted md:text-lg duration-300 transition-all'>7/6/2026</p>
                    </div>
                    <p className='text-text-muted mt-2.5'>Not as described!</p>
                </div>
                <div className=''>
                    <div className='flex justify-between text-text-main'>
                        <p className='flex gap-5'>
                            <span className='md:text-lg duration-300 transition-all'>Jack Welson</span>
                            <span className='flex items-center gap-2.5'>
                                <span className='text-text-muted md:text-lg duration-300 transition-all'>3</span>
                                <span className='text-stars'><TiStarFullOutline className='md:size-5 duration-300 transition-all' /></span>
                            </span>
                        </p>
                        <p className='text-text-muted md:text-lg duration-300 transition-all'>7/6/2026</p>
                    </div>
                    <p className='text-text-muted mt-2.5'>Very satisfied!</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews;