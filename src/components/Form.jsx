import { useState } from 'react'
import './Form.scss'

import Header from './Header'
import Checkbox from './Checkbox'
import Alert from './Alert'

const Form = () => {
    const [age, setAge] = useState(0)
    const [blurredVisionAfar, setBlurredVisionAfar] = useState(0)
    const [blurredVisionCloseUp, setBlurredVisionCloseUp] = useState(0)
    const [headache, setHeadache] = useState(0)
    const [eyeStrain, setEyeStrain] = useState(0)
    const [momMyopia, setMomMyopia] = useState(0)
    const [dadMyopia, setDadMyopia] = useState(0)
    const [momHyperopia, setMomHyperopia] = useState(0)
    const [dadHyperopia, setDadHyperopia] = useState(0)
    const [momAstigmatism, setMomAstigmatism] = useState(0)
    const [dadAstigmatism, setDadAstigmatism] = useState(0)
    const [showAlert, setShowAlert] = useState(true)

    const submit = (e) => {
        e.preventDefault()
        console.log('submit')
    }
    return (
        <>
            <Header
                title='Diseño de un entorno virtual inteligente para la detección de problemas
                visuales'
            />
            <main className='main'>
                <form className='form' onSubmit={submit}>
                    <h2 className='form-title'>Anamnesis</h2>
                    <section className='form-content'>
                        <label htmlFor='age' className='form-content-label'>
                            <span>*</span> Edad
                        </label>
                        <input
                            id='age'
                            type='number'
                            min={0}
                            max={50}
                            className='form-content-input'
                            value={age}
                            onChange={({ target: { value } }) => {
                                if (value === '') {
                                    setAge(value)
                                } else {
                                    setAge(parseInt(value))
                                }
                            }}
                        />
                        <small className='form-content-information'>
                            La edad permitida es de 0-50 años.
                        </small>
                    </section>
                    <article className='form-article'>
                        <h3 className='form-article-title'>
                            Seleccione las opciones que padece:
                        </h3>
                        <Checkbox
                            id='blurred-vision-afar'
                            label='Visión borrosa de lejos'
                            setValue={setBlurredVisionAfar}
                            value={blurredVisionAfar}
                        />
                        <Checkbox
                            id='blurred-vision-close-up'
                            label='Visión borrosa de cerca'
                            setValue={setBlurredVisionCloseUp}
                            value={blurredVisionCloseUp}
                        />
                        <Checkbox
                            id='headache'
                            label='Dolor de cabeza'
                            setValue={setHeadache}
                            value={headache}
                        />
                        <Checkbox
                            id='eye-strain'
                            label='Fatiga visual'
                            setValue={setEyeStrain}
                            value={eyeStrain}
                        />
                        <Checkbox
                            id='mom-myopia'
                            label='Mamá con miopía'
                            setValue={setMomMyopia}
                            value={momMyopia}
                        />
                        <Checkbox
                            id='dad-myopia'
                            label='Papá con miopía'
                            setValue={setDadMyopia}
                            value={dadMyopia}
                        />
                        <Checkbox
                            id='mom-hyperopia'
                            label='Mamá con hipermetropía'
                            setValue={setMomHyperopia}
                            value={momHyperopia}
                        />
                        <Checkbox
                            id='dad-hyperopia'
                            label='Papá con hipermetropía'
                            setValue={setDadHyperopia}
                            value={dadHyperopia}
                        />
                        <Checkbox
                            id='mom-astigmatism'
                            label='Mamá con astigmatismo'
                            setValue={setMomAstigmatism}
                            value={momAstigmatism}
                        />
                        <Checkbox
                            id='dad-astigmatism'
                            label='Papá con astigmatismo'
                            setValue={setDadAstigmatism}
                            value={dadAstigmatism}
                        />
                    </article>
                    <div className='form-submit'>
                        <button className='form-submit-button' type='submit'>
                            Diagnosticar
                        </button>
                    </div>
                    <Alert
                        show={showAlert}
                        setShow={setShowAlert}
                        title='Campos vacíos'
                        message='Verifique que el campo de la edad no se encuentre vacío.'
                    />
                </form>
            </main>
        </>
    )
}

export default Form
