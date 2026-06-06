import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '@/features/home/home'
import HomeContent from '@/features/home/components/homeContent'

function Router() {

    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />}></Route>
            <Route path='/home' element={<Home />}>
                <Route index element={<HomeContent />}></Route>
            </Route>
        </Routes>
    )
}

export default Router;