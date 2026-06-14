
function NotFound() {

    return (
        <div className='w-screen h-screen p-5 flex flex-col gap-5 items-center justify-center'>
            <h1 className='animate-bounce capitalize text-text-main text-3xl lg:text-4xl font-black'>
                page not found
            </h1>
            <button className='bg-bg-secondary text-text-main p-5 rounded-xl font-medium text-xl lg:text-2xl capitalize border-2 border-border hover:bg-border-hover transition-all duration-300'>
                <a href='/home'>back to home</a>
            </button>
        </div>
    )
}

export default NotFound;