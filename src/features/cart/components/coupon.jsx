
function Coupon() {

    return (
        <div className='mt-10 flex gap-5 text-base md:text-lg'>
            <input className='rounded-lg p-2.5 focus:border-border-hover flex items-center border-2 border-border text-text-muted' placeholder='Enter your coupon' />
            <button className='hover:scale-90 duration-300 font-bold p-2.5 rounded-lg text-on-primary bg-primary'>submit</button>
        </div>
    )
}

export default Coupon;