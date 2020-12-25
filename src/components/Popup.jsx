import './Popup.scss'

const Popup = ({ title, description }) => {
    return (
        <div className='popup'>
            <h2 className='popup-title'>{title}</h2>
            <p className='popup-description'>{description}</p>
            <div className='popup-link'>
                <a href='#'>Ver comparación</a>
            </div>
        </div>
    )
}

export default Popup
