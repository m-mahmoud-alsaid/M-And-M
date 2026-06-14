
function QuantityCounter() {

    return (
        <div className=''>
            <p className='font-bold text-text-main text-lg md:text-2xl transition-all duration-300 mb-2.5'>Quantity</p>
            <div className='flex text-text-main items-center text-lg md:text-2xl duration-300 transition-all bg-border w-24 sm:w-28 md:w-32 lg:w-40 rounded-md overflow-hidden'>
                <button className='font-bold p-2 flex-1 hover:bg-border-hover duration-300 transition-all'>-</button>
                <p className='p-2 flex-2 text-center'>1</p>
                <button className='font-bold p-2 flex-1 hover:bg-border-hover duration-300 transition-all'>+</button>
            </div>
        </div>
    )
}

export default QuantityCounter;