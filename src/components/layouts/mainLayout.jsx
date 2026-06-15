import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import DevAccounts from '@/components/ui/devAccounts'
import { FaAngleUp } from "react-icons/fa"

function MainLayout({ children }) {

    return (
        <>
            <Header />
            <div className=''>
                {children}
            </div>
            <FaAngleUp
                className='block fixed bottom-5 right-5 z-50 bg-[#FFCB00] hover:bg-[#E6B600] duration-300 transition-all w-8 h-8 md:w-10 md:h-10 rounded'
            />
            <Footer />
            <DevAccounts />
        </>
    )
}

export default MainLayout;