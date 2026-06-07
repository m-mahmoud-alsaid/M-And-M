
function Button({ details }) {

    return <input
        className={`font-bold rounded-md w-full h-10 sm:h-12 md:h-14 text-[var(--txtColor)] bg-[var(--bgColor)] hover:bg-[var(--hoverColor)] duration-300 transition-all`}
        style={{
            '--bgColor': details.bgColor,
            '--txtColor': details.txtColor,
            '--hoverColor': details.hoverColor,
        }}
        type={details.type}
        placeholder={details.placeholder}
        required={details.isRequired}
        value={details.value} />
}

export default Button;