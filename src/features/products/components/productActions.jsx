import Button from '@/components/ui/button'

function ProductActions() {
    const common = {
        type: 'button',
        placeholder: '',
        isRequired: false
    };

    const firstDetails = {
        ...common,
        value: 'Add to cart',
        txtColor: 'var(--cart-text)',
        bgColor: 'var(--cart-bg)',
        hoverColor: 'var(--cart-hover)'
    };

    const SecondDetails = {
        ...common,
        value: 'Buy it',
        txtColor: 'var(--buy-text)',
        bgColor: 'var(--buy-bg)',
        hoverColor: 'var(--buy-hover)'
    };

    return (
        <div className='flex gap-2.5 md:gap-5 text-lg md:text-xl text-white'>
            <div className='flex-1'>
                <Button details={firstDetails} />
            </div>
            <div className='flex-1'>
                <Button details={SecondDetails} />
            </div>
        </div>
    )
}

export default ProductActions;