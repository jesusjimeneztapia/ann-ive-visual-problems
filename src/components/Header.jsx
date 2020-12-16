import './Header.scss'

import headerEyes from '../assets/images/header-eyes.png'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <img className='header-img' src={headerEyes} alt='Header eyes' />
            <h1 className='header-title'>{title}</h1>
        </header>
    )
}

export default Header
