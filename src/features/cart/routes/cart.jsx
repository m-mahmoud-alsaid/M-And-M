import Products from '@/features/cart/components/products'
import Coupon from '@/features/cart/components/coupon'
import Checkout from '@/features/cart/components/checkout'

function Cart() {

    return (
        <div className='text-text-main m-2.5 md:m-5'>
            <Products />
            <Coupon />
            <Checkout />
        </div>
    )
}

export default Cart;