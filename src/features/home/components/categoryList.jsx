import { NavLink } from 'react-router-dom'

function CategoryList() {

    const categories = [
        {
            id: 1,
            name: "Electronics",
        },
        {
            id: 2,
            name: "Fashion & Apparel",
        },
        {
            id: 3,
            name: "Jewelry & Accessories",
        },
        {
            id: 4,
            name: "Home & Living",
        },
        {
            id: 5,
            name: "Fitness & Outdoor",
        },
        {
            id: 6,
            name: "Beauty & Wellness",
        }
    ];

    return (
        <ul className='animate-come-from-left rounded-lg shadow-lg shadow-shadow-md overflow-x-hidden overflow-y-auto bg-bg-secondary text-text-main transition-all duration-300'>
            {categories.map(value => (
                <li key={value.id} className='p-2.5 cursor-pointer hover:text-text-main-hover text-base md:text-lg hover:bg-border-hover transition-all duration-300'>
                    <NavLink to={`/category/${value.name}`} className={({ isActive }) => isActive ? 'underline underline-offset-4 text-text-main-hover' : ''}>
                        {value.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default CategoryList;