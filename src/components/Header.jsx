import './Header.scss'

import headerEyes from '../assets/images/header-eyes.png'

const Header = () => {
    return (
        <header className='header'>
            <img className='header-img' src={headerEyes} alt='Header eyes' />
            <h1 className='header-title'>
                Diseño de un entorno virtual inteligente para la detección de problemas
                visuales
            </h1>
        </header>
    )
}

export default Header
