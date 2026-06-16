import Products from '@/features/cart/components/products'
import Coupon from '@/features/cart/components/coupon'

function Cart() {

    return (
        <div className='text-text-main m-2.5 md:m-5'>
            <Products />
            <Coupon />
        </div>
    )
}

export default Cart;