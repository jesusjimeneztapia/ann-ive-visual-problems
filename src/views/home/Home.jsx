import { connect } from 'react-redux'
import { useState } from 'react'
import './Home.scss'
import '../../styles/styles.scss'

import Header from '../../components/Header'
import { AgeInput } from './components'
import { Alert, Checkbox, Popup, Select } from '../../components'

import getResult, { getDefaultResult } from '../../store/actions/getResult'
import { predict } from '../../utils'
import {
    MOM_DAD_ASTIGMATISM,
    MOM_DAD_HYPEROPIA,
    MOM_DAD_MYOPIA,
    MOM_DAD_NORMAL,
} from '../../constants/results'

const Home = ({ result, getResult, getDefaultResult }) => {
    const [age, setAge] = useState(0)
    const [blurredVisionAfar, setBlurredVisionAfar] = useState(0)
    const [blurredVisionCloseUp, setBlurredVisionCloseUp] = useState(0)
    const [headache, setHeadache] = useState(0)
    const [eyeStrain, setEyeStrain] = useState(0)
    const [mom, setMom] = useState(MOM_DAD_NORMAL.value)
    const [dad, setDad] = useState(MOM_DAD_NORMAL.value)

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
                setMom(MOM_DAD_NORMAL.value)
                setDad(MOM_DAD_NORMAL.value)
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
                mom,
                dad,
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
                <Header title='Detección de problemas visuales' />
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
                                Seleccione los síntomas que padece:
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
                            <Select
                                label='Seleccione el problema visual que padece tu madre'
                                options={[
                                    MOM_DAD_NORMAL,
                                    MOM_DAD_MYOPIA,
                                    MOM_DAD_HYPEROPIA,
                                    MOM_DAD_ASTIGMATISM,
                                ]}
                                handleChange={setMom}
                                value={mom}
                            />
                            <Select
                                label='Seleccione el problema visual que padece tu padre'
                                options={[
                                    MOM_DAD_NORMAL,
                                    MOM_DAD_MYOPIA,
                                    MOM_DAD_HYPEROPIA,
                                    MOM_DAD_ASTIGMATISM,
                                ]}
                                handleChange={setDad}
                                value={dad}
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
