import { useState } from 'react'
import './Form.scss'

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
                            value={age}
                            onChange={({ target: { value } }) => {
                                if (value === '') {
                                    setAge(value)
                                } else {
                                    setAge(parseInt(value))
                                }
                            }}
                        />
                    </section>
                    <section className='form-content'>
                        <input
                            id='blurred-vision-afar'
                            type='checkbox'
                            min={0}
                            max={50}
                            className='form-content-input'
                            value={blurredVisionAfar}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setBlurredVisionAfar(1)
                                } else {
                                    setBlurredVisionAfar(0)
                                }
                            }}
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
                            value={blurredVisionCloseUp}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setBlurredVisionCloseUp(1)
                                } else {
                                    setBlurredVisionCloseUp(0)
                                }
                            }}
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
                            value={headache}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setHeadache(1)
                                } else {
                                    setHeadache(0)
                                }
                            }}
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
                            value={eyeStrain}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setEyeStrain(1)
                                } else {
                                    setEyeStrain(0)
                                }
                            }}
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
                            value={momMyopia}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setMomMyopia(1)
                                } else {
                                    setMomMyopia(0)
                                }
                            }}
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
                            value={dadMyopia}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setDadMyopia(1)
                                } else {
                                    setDadMyopia(0)
                                }
                            }}
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
                            value={momHyperopia}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setMomHyperopia(1)
                                } else {
                                    setMomHyperopia(0)
                                }
                            }}
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
                            value={dadHyperopia}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setDadHyperopia(1)
                                } else {
                                    setDadHyperopia(0)
                                }
                            }}
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
                            value={momAstigmatism}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setMomAstigmatism(1)
                                } else {
                                    setMomAstigmatism(0)
                                }
                            }}
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
                            value={dadAstigmatism}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setDadAstigmatism(1)
                                } else {
                                    setDadAstigmatism(0)
                                }
                            }}
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
