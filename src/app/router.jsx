import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '@/features/home/routes/home'
import HomeContent from '@/features/home/components/homeContent'
import Products from '@/features/products/routes/products'
import CategoryProducts from '@/features/products/routes/categoryProducts'

function Router() {

    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />}></Route>
            <Route path='/home' element={<Home />}>
                <Route index element={<HomeContent />}></Route>
                <Route path='products' element={<Products />}></Route>
                <Route path='category' element={<CategoryProducts />}></Route>
            </Route>
        </Routes>
    )
}

export default Router;