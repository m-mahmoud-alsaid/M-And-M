
function Button({ details }) {

    return <input
        type={details.type}
        placeholder={details.placeholder}
        required={details.isRequired} />
}

export default Button;