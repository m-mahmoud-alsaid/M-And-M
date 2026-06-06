import { FaTruck } from "react-icons/fa6"
import { BiSupport } from "react-icons/bi"
import { GiReturnArrow } from "react-icons/gi"
import { BsCreditCard2BackFill } from "react-icons/bs"
import { MdSavings } from "react-icons/md"

function Services() {
    const services = [
        {
            icon: FaTruck,
            title: 'free delivery',
            subtitle: 'from $59.99',
        },
        {
            icon: BiSupport,
            title: 'support 24/7',
            subtitle: 'online 24 hours',
        },
        {
            icon: GiReturnArrow,
            title: 'free return',
            subtitle: '365 a day',
        },
        {
            icon: BsCreditCard2BackFill,
            title: 'payment method',
            subtitle: 'secure payment',
        },
        {
            icon: MdSavings,
            title: 'big saving',
            subtitle: 'weekend sales',
        },
    ]
    return (
        <div className='flex flex-nowrap h-20 pt-2 pb-2 animate-grow overflow-hidden bg-border'>
            <div className='flex flex-nowrap w-max animate-loop-left hover:[animation-play-state:paused] duration-300'>
                {services.map(value => (
                    <div key={value.title} className='w-52 flex gap-2 justify-evenly items-center text-text-main flex-auto'>
                        <value.icon className='size-8 sm:size-9 md:size-10 duration-300 transition-all' />
                        <p className='flex flex-col'>
                            <span className='capitalize font-medium text-base sm:text-lg md:text-xl transition-all duration-300'>{value.title}</span>
                            <span className='capitalize text-text-muted'>{value.subtitle}</span>
                        </p>
                    </div>
                ))}
                {services.map(value => (
                    <div key={value.subtitle} className='w-52 flex gap-2 justify-evenly items-center text-text-main flex-auto'>
                        <value.icon className='size-8 sm:size-9 md:size-10 duration-300 transition-all' />
                        <p className='flex flex-col'>
                            <span className='capitalize font-medium text-base sm:text-lg md:text-xl transition-all duration-300'>{value.title}</span>
                            <span className='capitalize text-text-muted'>{value.subtitle}</span>
                        </p>
                    </div>
                ))}
                {services.map(value => (
                    <div key={value.subtitle} className='w-52 flex gap-2 justify-evenly items-center text-text-main flex-auto'>
                        <value.icon className='size-8 sm:size-9 md:size-10 duration-300 transition-all' />
                        <p className='flex flex-col'>
                            <span className='capitalize font-medium text-base sm:text-lg md:text-xl transition-all duration-300'>{value.title}</span>
                            <span className='capitalize text-text-muted'>{value.subtitle}</span>
                        </p>
                    </div>
                ))}
                {services.map(value => (
                    <div key={value.subtitle} className='w-52 flex gap-2 justify-evenly items-center text-text-main flex-auto'>
                        <value.icon className='size-8 sm:size-9 md:size-10 duration-300 transition-all' />
                        <p className='flex flex-col'>
                            <span className='capitalize font-medium text-base sm:text-lg md:text-xl transition-all duration-300'>{value.title}</span>
                            <span className='capitalize text-text-muted'>{value.subtitle}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;