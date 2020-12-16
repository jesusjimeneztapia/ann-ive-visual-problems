import './Form.scss'

const Form = () => {
    const submit = (e) => {
        e.preventDefault()
        console.log('submit')
    }
    return (
        <>
            <header className='header'>
                <h1 className='header-title'>
                    Diseño de un entorno virtual inteligente para la detección de
                    problemas visuales
                </h1>
            </header>
            <main className='main'>
                <form className='form' onSubmit={submit}>
                    <h2 className='form-title'>Anamnesis</h2>
                    <section className='form-content'>
                        <label htmlFor='age' className='form-content-label'>
                            Edad
                        </label>
                        <input
                            id='age'
                            type='number'
                            min={0}
                            max={50}
                            className='form-content-input'
                        />
                    </section>
                    <section className='form-content'>
                        <input
                            id='blurred-vision-afar'
                            type='checkbox'
                            min={0}
                            max={50}
                            className='form-content-input'
                        />
                        <label
                            htmlFor='blurred-vision-afar'
                            className='form-content-label'
                        >
                            Visión borrosa de lejos
                        </label>
                    </section>
                    <section className='form-content'>
                        <input
                            id='blurred-vision-close-up'
                            type='checkbox'
                            min={0}
                            max={50}
                            className='form-content-input'
                        />
                        <label
                            htmlFor='blurred-vision-close-up'
                            className='form-content-label'
                        >
                            Visión borrosa de cerca
                        </label>
                    </section>
                    <section className='form-content'>
                        <input
                            id='headache'
                            type='checkbox'
                            min={0}
                            max={50}
                            className='form-content-input'
                        />
                        <label htmlFor='headache' className='form-content-label'>
                            Dolor de cabeza
                        </label>
                    </section>
                    <section className='form-content'>
                        <input
                            id='eye-strain'
                            type='checkbox'
                            min={0}
                            max={50}
                            className='form-content-input'
                        />
                        <label htmlFor='eye-strain' className='form-content-label'>
                            Fatiga visual
                        </label>
                    </section>
                    <section className='form-content'>
                        <input
                            id='mom-myopia'
                            type='checkbox'
                            min={0}
                            max={50}
                            className='form-content-input'
                        />
                        <label htmlFor='mom-myopia' className='form-content-label'>
                            Mamá con miopía
                        </label>
                    </section>
                    <section className='form-content'>
                        <input
                            id='dad-myopia'
                            type='checkbox'
                            min={0}
                            max={50}
                            className='form-content-input'
                        />
                        <label htmlFor='dad-myopia' className='form-content-label'>
                            Papá con miopía
                        </label>
                    </section>
                    <section className='form-content'>
                        <input
                            id='mom-hyperopia'
                            type='checkbox'
                            min={0}
                            max={50}
                            className='form-content-input'
                        />
                        <label htmlFor='mom-hyperopia' className='form-content-label'>
                            Mamá con hipermetropía
                        </label>
                    </section>
                    <section className='form-content'>
                        <input
                            id='dad-hyperopia'
                            type='checkbox'
                            min={0}
                            max={50}
                            className='form-content-input'
                        />
                        <label htmlFor='dad-hyperopia' className='form-content-label'>
                            Papá con hipermetropía
                        </label>
                    </section>
                    <section className='form-content'>
                        <input
                            id='mom-astigmatism'
                            type='checkbox'
                            min={0}
                            max={50}
                            className='form-content-input'
                        />
                        <label htmlFor='mom-astigmatism' className='form-content-label'>
                            Mamá con astigmatismo
                        </label>
                    </section>
                    <section className='form-content'>
                        <input
                            id='dad-astigmatism'
                            type='checkbox'
                            min={0}
                            max={50}
                            className='form-content-input'
                        />
                        <label htmlFor='dad-astigmatism' className='form-content-label'>
                            Papá con astigmatismo
                        </label>
                    </section>
                    <button className='form-submit' type='submit'>
                        Diagnosticar
                    </button>
                </form>
            </main>
        </>
    )
}

export default Form
