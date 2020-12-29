import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { NOT_FOUND } from '../../constants/routeNames'
import './Eyes.scss'

import { Header } from '../../components'
import {
    MOM_DAD_ASTIGMATISM,
    MOM_DAD_HYPEROPIA,
    MOM_DAD_MYOPIA,
    MOM_DAD_NORMAL,
} from '../../constants/results'

const Eyes = ({ result }) => {
    const getClass = (problem) => {
        if (result.title === `Ojo ${MOM_DAD_NORMAL.value}`) {
            return 'eye-section'
        } else {
            if (problem === MOM_DAD_NORMAL.value) {
                return 'eye-section center-normal'
            } else {
                if (`Ojo ${problem}` === result.title) {
                    return 'eye-section center-problem'
                } else {
                    return 'display-none'
                }
            }
        }
    }
    return (
        <>
            {result.title ? (
                <>
                    <Header title='Comparación de ojos' />
                    <div className='eyes'>
                        <div className={getClass(MOM_DAD_NORMAL.value)}>
                            <h4 className='h4'>Normal</h4>
                            <div className='eye-container'>
                                <div className='eye'>
                                    <div className='eye-side' id='one'></div>
                                    <div className='eye-side' id='two'></div>
                                    <div className='eye-side' id='three'></div>
                                    <div className='eye-side' id='four'></div>
                                    <div className='eye-side' id='five'></div>
                                    <div className='eye-side' id='six'></div>
                                </div>
                            </div>
                        </div>
                        <div className={getClass(MOM_DAD_MYOPIA.value)}>
                            <h4 className='h4'>Miopía</h4>
                            <div className='eye-container'>
                                <div className='eye myopic'>
                                    <div className='eye-side' id='one'></div>
                                    <div className='eye-side' id='two'></div>
                                    <div className='eye-side' id='three'></div>
                                    <div className='eye-side' id='four'></div>
                                    <div className='eye-side' id='five'></div>
                                    <div className='eye-side' id='six'></div>
                                </div>
                            </div>
                        </div>
                        <div className={getClass(MOM_DAD_HYPEROPIA.value)}>
                            <h4 className='h4'>Hipermetropía</h4>
                            <div className='eye-container'>
                                <div className='eye hyperopic'>
                                    <div className='eye-side' id='one'></div>
                                    <div className='eye-side' id='two'></div>
                                    <div className='eye-side' id='three'></div>
                                    <div className='eye-side' id='four'></div>
                                    <div className='eye-side' id='five'></div>
                                    <div className='eye-side' id='six'></div>
                                </div>
                            </div>
                        </div>
                        <div className={getClass(MOM_DAD_ASTIGMATISM.value)}>
                            <h4 className='h4'>Astigmatismo</h4>
                            <div className='eye-container'>
                                <div className='eye astigmatic'>
                                    <div className='eye-side' id='one'></div>
                                    <div className='eye-side' id='two'></div>
                                    <div className='eye-side' id='three'></div>
                                    <div className='eye-side' id='four'></div>
                                    <div className='eye-side' id='five'></div>
                                    <div className='eye-side' id='six'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Redirect to={NOT_FOUND} />
            )}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        result: state.result,
    }
}

export default connect(mapStateToProps)(Eyes)
