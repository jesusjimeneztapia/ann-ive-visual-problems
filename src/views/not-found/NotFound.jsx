import './NotFound.scss'
import '../../styles/styles.scss'
import lost from '../../assets/images/lost.gif'
import { Link } from 'react-router-dom'
import { HOME } from '../../constants/routeNames'

const NotFound = () => {
    return (
        <div className='container'>
            <div className='code'>
                <p className='h1'>404</p>
            </div>

            <p className='title h3'>¡Vaya!, te perdiste</p>
            <div className='lost'>
                <img src={lost} alt='Náufrago' />
            </div>
            <p className='message p'>La página no fue encontrada</p>
            <Link className='link' to={HOME}>
                Regresar
            </Link>
        </div>
    )
}

export default NotFound
