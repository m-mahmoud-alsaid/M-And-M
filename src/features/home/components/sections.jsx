import { useNavigate } from 'react-router-dom'
import One from '@/assets/one.png'
import Two from '@/assets/two.png'
import Three from '@/assets/three.png'
import Four from '@/assets/four.png'

function Sections() {

    const navigate = useNavigate();

    const sections = [
        {
            color: '#C92424',
            img: One,
            path: 'category/smartPhones'
        },
        {
            color: '#FFCB00',
            img: Two,
            path: 'category/mens-shirts'
        },
        {
            color: '#0B3599',
            img: Three,
            path: 'category/beauty'
        },
        {
            color: '#40B44A',
            img: Four,
            path: 'category/home-decoration'
        }];

    return (
        <div className='self-start animate-come-from-right flex-1 grid gap-2.5 grid-cols-1 md:grid-cols-2 md:gap-5'>
            {sections.map(value => (
                <div
                    key={value.color}
                    onClick={() => navigate(value.path)}
                    className={`shadow-2xl shadow-shadow-md aspect-21/9 md:aspect-3/1 overflow-hidden cursor-pointer rounded-lg hover:scale-90 duration-300 transition-all`}>
                    <img className='object-cover object-center w-full h-full' src={value.img} alt='Section Image' />
                </div>
            ))}
        </div>
    )
}

export default Sections;