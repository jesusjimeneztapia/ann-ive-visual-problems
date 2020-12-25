import './Popup.scss'

const Popup = () => {
    return (
        <div className='popup'>
            <h2 className='popup-title'>Ojo con {'<Problema del ojo>'}</h2>
            <p className='popup-description'>
                Aquí estará la descripción del problema del ojo.
            </p>
            <a href='#'>Ver ojo</a>
        </div>
    )
}

export default Popup
