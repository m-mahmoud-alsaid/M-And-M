import { FaLinkedin, FaGithub } from "react-icons/fa6"

function DevAccounts() {

    const accounts = [
        {
            id: 1,
            href: 'https://www.linkedin.com/in/m-mahmoud-alsaid',
            icon: FaLinkedin
        },
        {
            id: 2,
            href: 'https://github.com/m-mahmoud-alsaid',
            icon: FaGithub
        },
    ];

    return (
        <div className='grid grid-cols-1 gap-2.5 fixed bottom-5 left-0'>
            {accounts.map(value => (
                <a href={value.href} target='_blank' key={value.id} className='group border-2 border-border hover:bg-border-hover scale-0 sm:scale-100 p-2.5 w-18 hover:w-28 rounded-r-full text-text-main bg-bg-secondary transition-all duration-300'>
                    <value.icon className='ml-auto size-7 group-hover:rotate-360 group-hover:scale-125 transition-all duration-500' />
                </a>
            ))}
        </div>
    )
}

export default DevAccounts;