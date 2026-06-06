import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaSquareXTwitter, FaYoutube } from "react-icons/fa6"
import { FaGooglePlay, FaCcVisa, FaCcMastercard, FaCcPaypal, FaGooglePay, FaCcApplePay } from "react-icons/fa6"
import { GrAppleAppStore } from "react-icons/gr"


const currentYear = new Date().getFullYear();

function Footer() {

    const paymentMethods = [
        {
            id: 1,
            icon: FaCcVisa
        },
        {
            id: 2,
            icon: FaCcMastercard
        },
        {
            id: 3,
            icon: FaCcPaypal
        },
        {
            id: 4,
            icon: FaGooglePay
        },
        {
            id: 5,
            icon: FaCcApplePay
        },
    ];

    const socialMedia = [
        {
            id: 1,
            icon: FaFacebookF,
            color: 'white'
        },
        {
            id: 2,
            icon: FaInstagram,
            color: '#d62976'
        },
        {
            id: 3,
            icon: FaSquareXTwitter,
            color: 'black'
        },
        {
            id: 4,
            icon: FaYoutube,
            color: 'red'
        },
    ];

    return (
        <div className='bg-primary p-5 flex flex-col gap-10 animate-grow'>
            <div className='flex gap-12.5 flex-col md:flex-row'>
                <div className='flex flex-col gap-7 flex-2'>
                    <h4 className='uppercase text-on-primary font-black text-3xl md:text-4xl cursor-pointer'>m&m</h4>
                    <p className='text-on-primary text-base md:text-lg opacity-80'>
                        Your ultimate destination for premium tech, fashion, and everyday essentials.
                        We deliver curated, high-quality products with a seamless shopping experience and trusted customer care.
                    </p>
                    <div className='flex gap-5'>
                        <a href='#' className='w-fit text-on-primary hover:scale-[0.8] duration-300'>
                            <GrAppleAppStore className='size-8 md:size-10' />
                        </a>
                        <a href='#' className='w-fit text-on-primary hover:scale-[0.8] duration-300'>
                            <FaGooglePlay className='size-6 md:size-8' />
                        </a>
                    </div>
                    <div className='gap-5'>
                        <p className='capitalize text-on-primary font-bold text-xl mb-2.5'>our social media</p>
                        <div className='flex gap-2.5'>
                            {socialMedia.map(value => (
                                <a key={value.id} href='#' className={`w-fit hover:scale-[0.8] duration-300`}>
                                    <value.icon className='size-6 md:size-8 text-on-primary' />
                                </a>
                            ))}
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

            <div className='flex flex-wrap gap-5 justify-center pr-5'>
                {paymentMethods.map(value => <value.icon key={value.id} className={`size-10 md:size-16 text-on-primary`} />)}
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