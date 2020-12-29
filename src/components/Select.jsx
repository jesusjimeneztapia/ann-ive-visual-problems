import './Select.scss'

const Select = ({ label, options, handleChange, value }) => {
    return (
        <section className='select'>
            <label className='h5'>{label}</label>
            <select
                className='p'
                onChange={({ target: { value } }) => {
                    handleChange(value)
                }}
                value={value}
            >
                {options.map(({ value, text }) => (
                    <option value={value} key={`${value}`}>
                        {text}
                    </option>
                ))}
            </select>
        </section>
    )
}

export default Select
