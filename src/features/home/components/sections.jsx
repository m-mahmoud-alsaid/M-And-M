import One from '@/assets/one.png'
import Two from '@/assets/two.png'
import Three from '@/assets/three.png'
import Four from '@/assets/four.png'

function Sections() {

    const sections = [
        {
            name: 'Sales',
            color: '#C92424',
            img: One
        },
        {
            name: 'Summer',
            color: '#FFCB00',
            img: Two
        },
        {
            name: 'Winter',
            color: '#0B3599',
            img: Three
        },
        {
            name: 'Spring',
            color: '#40B44A',
            img: Four
        }];

    return (
        <div className='animate-come-from-right flex-2 grid gap-2.5 grid-cols-1 md:grid-cols-2 md:gap-5'>
            {sections.map(value => (
                <div
                    key={value.color}
                    className={`shadow-2xl shadow-shadow-md bg-cover bg-center bg-no-repeat aspect-21/9 md:aspect-3/1 cursor-pointer rounded-lg hover:scale-[0.9] duration-300 transition-all`}
                    style={{ backgroundImage: `url(${value.img})` }}>
                </div>
            ))}
        </div>
    )
}

export default Sections;