import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

function MainLayout({ children }) {

    return (
        <>
            <Header />
            <div className=''>{children}</div>
            <Footer />
        </>
    )
}

export default MainLayout;