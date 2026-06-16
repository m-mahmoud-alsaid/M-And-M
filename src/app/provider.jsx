import ThemeProvider from '@/stores/theme/themeProvider'
import CartProvider from '@/stores/cart/cartProvider'

function Provider({ children }) {

    return (
        <CartProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </CartProvider>
    )
}

export default Provider;