import { Link } from 'react-router-dom'
import AppleStore from '@/assets/apple-store.svg'
import GooglePlay from '@/assets/google-play.svg'
import Visa from '@/assets/visa.svg'
import MasterCard from '@/assets/mastercard.svg'
import Paypal from '@/assets/paypal.svg'
import AmericanExpress from '@/assets/american-express.svg'
import ApplePay from '@/assets/apple-pay.svg'
import GooglePay from '@/assets/google-pay.svg'
import { FaFacebookF, FaInstagram, FaSquareXTwitter, FaYoutube } from "react-icons/fa6"

const currentYear = new Date().getFullYear();

function Footer() {

    return (
        <div className='bg-primary p-5 flex flex-col gap-10'>
            <div className='flex gap-12.5 flex-col md:flex-row'>
                <div className='flex flex-col gap-7 flex-2'>
                    <h4 className='uppercase text-on-primary font-black text-3xl md:text-4xl cursor-pointer'>m&m</h4>
                    <p className='text-on-primary text-base md:text-lg opacity-80'>
                        Your ultimate destination for premium tech, fashion, and everyday essentials.
                        We deliver curated, high-quality products with a seamless shopping experience and trusted customer care.
                    </p>
                    <div className='flex gap-5'>
                        <a href='#' className='w-8 md:w-10 hover:scale-[0.8] duration-300'>
                            <img
                                className='w-full'
                                src={AppleStore}
                                alt='Get it on apple store' />
                        </a>
                        <a href='#' className='w-8 md:w-10 hover:scale-[0.8] duration-300'>
                            <img
                                className='w-full'
                                src={GooglePlay}
                                alt='Get it on google play' />
                        </a>
                    </div>
                    <div className=''>
                        <p className='capitalize text-on-primary font-bold text-xl mb-5'>our social media</p>

                        <div className='flex gap-2.5'>
                            <a href='#' className='w-8 h-8 md:w-10 md:h-10 hover:scale-[0.8] duration-300'>
                                <FaFacebookF className='w-full h-full text-white' />
                            </a>
                            <a href='#' className='w-8 h-8 md:w-10 md:h-10 hover:scale-[0.8] duration-300'>
                                <FaInstagram className='w-full h-full text-pink-700' />
                            </a>
                            <a href='#' className='w-8 h-8 md:w-10 md:h-10 hover:scale-[0.8] duration-300'>
                                <FaSquareXTwitter className='w-full h-full' />
                            </a>
                            <a href='#' className='w-8 h-8 md:w-10 md:h-10 hover:scale-[0.8] duration-300'>
                                <FaYoutube className='w-full h-full text-red-500' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <p className='text-on-primary font-bold text-xl mb-2.5'>Categories</p>
                    <ul className='flex flex-col gap-2.5 text-on-primary'>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>Electronics</Link>
                        </li>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>Men's Fashion</Link>
                        </li>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>Women's Fashion</Link>
                        </li>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>Home & Lifestyle</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col flex-1'>
                    <p className='text-on-primary font-bold text-xl mb-2.5'>Customer Service</p>
                    <ul className='flex flex-col gap-2.5 text-on-primary'>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>Contact us</Link>
                        </li>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>Track order</Link>
                        </li>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>Returns & Exchanges</Link>
                        </li>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>Shopping Info</Link>
                        </li>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>FAQ</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col flex-1'>
                    <p className='text-on-primary font-bold text-xl mb-2.5'>Information</p>
                    <ul className='flex flex-col gap-2.5 text-on-primary'>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>About us</Link>
                        </li>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>Privacy policy</Link>
                        </li>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>Terms & Conditions</Link>
                        </li>
                        <li className='group'>
                            <Link to='' className='opacity-80 text-base md:text-lg group-hover:underline group-hover:underline-offset-4'>Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className='text-on-primary' />

            <div className='flex  flex-wrap gap-5 justify-center pr-5'>
                <img className='w-16 md:w-22' src={Visa} alt='Visa' />
                <img className='w-16 md:w-22' src={MasterCard} alt='MasterCard' />
                <img className='w-16 md:w-22' src={Paypal} alt='PayPal' />
                <img className='w-16 md:w-22' src={AmericanExpress} alt='Amex' />
                <img className='w-16 md:w-22' src={ApplePay} alt='Apple Pay' />
                <img className='w-16 md:w-22' src={GooglePay} alt='Google Pay' />
            </div>

            <div className=''>
                <p className='text-center text-on-primary text-base md:text-lg'>
                    &copy; {currentYear} Mohamed Mahmoud. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;