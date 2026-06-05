import AmericaFlag from '@/assets/america.svg'
import { IoSunny } from "react-icons/io5"
import { MdDarkMode } from "react-icons/md"
import useTheme from '@/stores/theme/useTheme'
import { TiArrowSortedDown } from "react-icons/ti"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa"

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className='flex flex-col gap-5 bg-primary p-5 animate-opacity'>
            <div className='flex justify-end md:justify-between items-center'>
                <p className='text-on-primary hidden md:block duration-300'>Upgrade your everyday. Explore the M&M collection.</p>
                <div className=''>
                    <p className='flex gap-4 items-center text-on-primary text-base md:text-lg'>
                        <button className='relative w-10 h-10 pr-4 pl-4' onClick={toggleTheme}>
                            <IoSunny className={`w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${theme === 'light' ? 'opacity-100' : 'opacity-0'} transition-all duration-300`} />

                            <MdDarkMode className={`w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'} transition-all duration-300`} onClick={toggleTheme} />
                        </button>

                        <span className='flex gap-2'>
                            <img className='w-6' src={AmericaFlag} alt="America Flag" />
                            <span className=''>English</span>
                        </span>
                        <span className='cursor-pointer hover:underline hover:underline-offset-4'>Register</span>
                        <span className='cursor-pointer hover:underline hover:underline-offset-4'>Login</span>
                    </p>
                </div>
            </div>

            <div className='flex flex-col items-center md:flex-row md:justify-between md:items-center gap-5'>
                <h1 className='text-on-primary font-black uppercase text-3xl md:text-4xl lg:text-5xl'>m&m</h1>
                <div className='h-10 flex rounded-lg overflow-hidden'>
                    <div className='p-2 flex items-center justify-center bg-border text-text-main duration-300 transition-all'>
                        <p className='flex md:gap-5 items-center'>
                            <span className='hidden md:block duration-300'>All Catgegories</span>
                            <TiArrowSortedDown className='' />
                        </p>

                    </div>
                    <input className='text-text-main bg-border pl-5 outline-0 placeholder-text-main duration-300 transition-all' type='text' placeholder='Search for products...' />
                    <button className='capitalize bg-secondary font-bold pr-2 pl-2 hover:bg-secondary-hover duration-300 transition-colors'>search</button>
                </div>
                <div className='flex gap-5 items-center'>
                    <button className='flex items-center justify-center'>
                        <AiOutlineHeart className='text-on-primary size-6' />
                    </button>

                    <div className='flex gap-2.5 items-center ml-auto'>
                        <button className='flex items-center justify-center rounded-lg bg-secondary hover:bg-secondary-hover transition-all duration-300 w-10 h-10'>
                            <FaShoppingCart className='size-6' />
                        </button>
                        <div className=''>
                            <p className='font-bold capitalize text-on-primary'>my cart</p>
                            <p className='flex gap-2.5 capitalize text-on-primary'>
                                <span className=''>0 items</span>
                                <span className=''>-</span>
                                <span className=''>$1000</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;