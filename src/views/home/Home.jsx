import { connect } from 'react-redux'
import { useState } from 'react'
import './Home.scss'
import '../../styles/styles.scss'

import Header from '../../components/Header'
import { AgeInput } from './components'
import { Alert, Checkbox, Popup } from '../../components'

import getResult, { getDefaultResult } from '../../store/actions/getResult'
import { predict } from '../../utils'

const Home = ({ result, getResult, getDefaultResult }) => {
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
    const [showAlert, setShowAlert] = useState(false)
    const [emptyOldField, setEmptyOldField] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    const [firts, setFirts] = useState(true)

    const setPopup = () => {
        if (showPopup) {
            setShowPopup(false)
            setTimeout(() => {
                setAge(0)
                setBlurredVisionAfar(0)
                setBlurredVisionCloseUp(0)
                setHeadache(0)
                setEyeStrain(0)
                setMomMyopia(0)
                setDadMyopia(0)
                setMomHyperopia(0)
                setDadHyperopia(0)
                setMomAstigmatism(0)
                setDadAstigmatism(0)
                getDefaultResult()
            }, 800)
        }
    }

    const getClass = () => {
        if (showPopup) {
            return 'blur'
        }
        if (!firts) {
            return 'no-blur'
        }
        return ''
    }

    const showResult = () => {
        if (firts) {
            return <></>
        }
        if (showPopup) {
            return (
                <Popup
                    title={result.title}
                    description={result.description}
                    exit={setPopup}
                    state='down'
                />
            )
        }
        return (
            <Popup
                title={result.title}
                description={result.description}
                setShow={setShowPopup}
                state='up'
            />
        )
    }

    const submit = async (e) => {
        e.preventDefault()
        if (age === '') {
            setShowAlert(true)
            setEmptyOldField(true)
        } else {
            const data = {
                age,
                blurredVisionAfar,
                blurredVisionCloseUp,
                headache,
                eyeStrain,
                momMyopia,
                dadMyopia,
                momHyperopia,
                dadHyperopia,
                momAstigmatism,
                dadAstigmatism,
            }
            const index = await predict(data)
            getResult(index)
            setShowPopup(true)
            setFirts(false)
        }
    }

    return (
        <>
            <div
                className={getClass()}
                onClick={setPopup}
                onWheel={setPopup}
                onTouchMove={setPopup}
            >
                <Header
                    title='Diseño de un entorno virtual inteligente para la detección de problemas
                visuales'
                />
                <main className='main'>
                    <form className='form' onSubmit={submit}>
                        <h2 className='form-title h2'>Anamnesis</h2>
                        <AgeInput
                            age={age}
                            setAge={setAge}
                            invalid={emptyOldField}
                            setInvalid={setEmptyOldField}
                        />
                        <article className='form-article'>
                            <h3 className='form-article-title h4'>
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
                            delay={4000}
                        />
                    </form>
                </main>
            </div>
            {showResult()}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        result: state.result,
    }
}

const mapDispatchTopProps = {
    getDefaultResult,
    getResult,
}

export default connect(mapStateToProps, mapDispatchTopProps)(Home)
