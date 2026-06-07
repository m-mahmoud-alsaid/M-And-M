import QuantityCounter from '@/components/ui/quantityCounter'

function ProductBody() {

    return (
        <div className='flex flex-col gap-5 h-full justify-start'>
            <strong className='text-text-main text-lg sm:text-xl md:text-2xl'>$1199</strong>
            <p className='text-base max-h-52 overflow-y-auto sm:text-lg ms:text-xl text-text-muted duration-300 transition-all'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.</p>
            <p className='text-base sm:text-lg ms:text-xl text-[#40B44A] font-medium duration-300 transition-all capitalize'>In stock</p>
            <p className='flex gap-2.5 text-text-muted text-base sm:text-lg md:text-xl transition-all duration-300'>
                <span className='cursor-pointer hover:underline hover:underline-offset-4'>
                    <span className=''>#</span>
                    <span className=''>Tech</span>
                </span>
                <span className='cursor-pointer hover:underline hover:underline-offset-4'>
                    <span className=''>#</span>
                    <span className=''>Accessories</span>
                </span>
            </p>
            <QuantityCounter />
        </div>
    )
}

export default ProductBody;