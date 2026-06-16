
function Checkout() {

    return (
        <div className='mt-10 border-2 border-border rounded-xl p-5 text-text-muted text-base md:text-xl transition-all duration-300'>
            <p className='flex justify-between'>
                <span className='capitalize'>total</span>
                <span className='text-text-main font-medium'>$2000</span>
            </p>
            <button className='mt-5 bg-primary text-on-primary w-full p-2.5 rounded font-medium hover:scale-90 duration-300'>Proceed to checkout</button>
        </div>
    )
}

export default Checkout;