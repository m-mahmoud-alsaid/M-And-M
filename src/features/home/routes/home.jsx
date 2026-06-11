import { Outlet } from 'react-router-dom'
import MainLayout from '@/components/layouts/mainLayout'

function Home() {

    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    )
}

export default Home;