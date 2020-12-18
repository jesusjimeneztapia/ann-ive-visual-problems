import './Alert.scss'
import exitIcon from '../assets/images/exit.svg'

const Alert = ({ title, message, show, setShow, delay }) => {
    const exit = () => {
        setShow(false)
        console.log('Exit')
    }
    ;(function () {
        if (show && delay) {
            setTimeout(exit, delay)
        }
    })()

    if (show) {
        return (
            <div className='alert'>
                <div className='alert-header'>
                    <h6 className='alert-header-title'>{title}</h6>
                    <img src={exitIcon} alt='Icono de salir' onClick={exit} />
                </div>
                <div className='alert-body'>
                    <p className='alert-body-message'>{message}</p>
                </div>
            </div>
        )
    }
    return <></>
}

export default Alert
