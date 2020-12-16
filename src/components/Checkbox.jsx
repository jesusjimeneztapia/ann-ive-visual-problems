import './Checkbox.scss'

const Checkbox = ({ id, label, setValue, value }) => {
    return (
        <section className='checkbox'>
            <input
                id={id}
                type='checkbox'
                className='checkbox-input'
                checked={value}
                onChange={({ target: { checked } }) => {
                    if (checked) {
                        setValue(1)
                    } else {
                        setValue(0)
                    }
                }}
            />
            <label htmlFor={id} className='checkbox-label'>
                <h6>{label}</h6>
            </label>
        </section>
    )
}
export default Checkbox
