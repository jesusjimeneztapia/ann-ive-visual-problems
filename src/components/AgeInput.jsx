import './AgeInput.scss'

const AgeInput = ({ age, setAge, invalid, setInvalid }) => {
    const getClass = () => {
        let className = 'age-input'
        if (invalid) {
            className = `${className} invalid`
        }
        return className
    }
    return (
        <section className='age'>
            <label htmlFor='age' className='age-label'>
                <span>*</span> Edad
            </label>
            <input
                id='age'
                type='number'
                min={0}
                max={50}
                className={getClass()}
                value={age}
                onChange={({ target: { value } }) => {
                    if (value === '') {
                        setAge(value)
                    } else {
                        setAge(parseInt(value))
                    }
                }}
                onFocus={() => {
                    setInvalid(false)
                }}
            />
            <small className='age-information'>La edad permitida es de 0-50 años.</small>
            {invalid ? (
                <small className='age-invalid'>Este campo no puede estar vacío.</small>
            ) : (
                <></>
            )}
        </section>
    )
}

export default AgeInput
