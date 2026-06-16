import { useState } from 'react'
import CartContext from '@/stores/cart/cartContext'

function CartProvider({ children }) {
    const [cartList, setCartList] = useState(() => (
        localStorage.getItem('cartList') || { products: [] }
    ));

    const pushProduct = (product) => {
        setCartList(prev => prev.products.push(product));
    };

    return (
        <CartContext.Provider value={{ cartList, pushProduct }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;