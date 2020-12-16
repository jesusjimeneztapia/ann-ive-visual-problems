import { useState } from 'react'
import './Form.scss'

import Checkbox from './Checkbox'

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
                    <button className='form-submit' type='submit'>
                        Diagnosticar
                    </button>
                </form>
            </main>
        </>
    )
}

export default Form
