import { NavLink } from 'react-router-dom'
import useFetch from '@/hooks/useFetch'
import getProducts from '@/features/home/services/fetchAll'
import products from '@/features/home/api/products'

function CategoryList() {
    const { data: categoryList, loading } = useFetch(getProducts, products.getAllCategories);

    // if (loading) return <p className='text-text-main text-4xl'>Loading...</p>

    return (
        <ul className='animate-come-from-left rounded-lg h-full shadow-lg shadow-shadow-md overflow-x-hidden overflow-y-auto bg-bg-secondary text-text-main transition-all duration-300'>
            {categoryList?.map((value, index) => (
                <li key={index} className='capitalize p-2.5 cursor-pointer hover:text-text-main-hover text-base md:text-lg hover:bg-border-hover transition-all duration-300'>
                    <NavLink to={`category/${value}`} className={({ isActive }) => isActive ? 'underline underline-offset-4 text-text-main-hover' : ''}>
                        {value}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default CategoryList;