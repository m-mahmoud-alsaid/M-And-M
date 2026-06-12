import { TiStarFullOutline } from "react-icons/ti"

function Reviews({ product }) {

    return (
        <div className='text-text-main animate-grow'>
            <p className='capitalize font-bold mb-2.5 text-lg md:text-xl duration-300 transition-all'>reviews ({product.reviews.length})</p>
            <hr className='' />

            <div className='flex flex-col gap-8 mt-5 mb-5 bg-bg-secondary rounded'>
                <div className='grid grid-cols-1'>
                    {product.reviews.map((value, index) => (
                        <div key={index} className='border-b border-dashed border-text-muted p-5'>
                            <div className='flex justify-between text-text-main'>
                                <p className='flex gap-5'>
                                    <span className='md:text-lg duration-300 transition-all'>{value.reviewerName}</span>
                                    <span className='flex items-center gap-2.5'>
                                        <span className='text-text-muted md:text-lg duration-300 transition-all'>{value.rating}</span>
                                        <span className='text-stars'><TiStarFullOutline className='md:size-5 duration-300 transition-all' /></span>
                                    </span>
                                </p>
                                <p className='text-text-muted md:text-lg duration-300 transition-all'>{new Date(value.date).getFullYear()}</p>
                            </div>
                            <p className='text-text-muted mt-2.5'>{value.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Reviews;