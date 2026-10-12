
import React, { useId } from 'react'
function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId();
    return (
        <div class Name='w-full'>
            {label && <label
                className='inline-block mb-1'
                htmlFor={props.id || id}>
                {label}
            </label>}
            <select {...props} ref={ref} id={props.id || id}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border borer-gray-200 w-full ${className}`}>
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
