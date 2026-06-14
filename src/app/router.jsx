import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '@/features/home/routes/home'
import HomeContent from '@/features/home/components/homeContent'
import Products from '@/features/products/routes/products'
import CategoryProducts from '@/features/products/routes/categoryProducts'
import NotFound from '@/components/ui/notFound'

function Router() {

    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />}>
                <Route index element={<HomeContent />} />
                <Route path='products/:id' element={<Products />} />
                <Route path='category/:category' element={<CategoryProducts />} />
            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Router;