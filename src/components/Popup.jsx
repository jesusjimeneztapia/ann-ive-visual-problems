import './Popup.scss'

const Popup = ({ title, description, exit, state }) => {
    return (
        <div className={`popup ${state}`}>
            <div className='popup-header'>
                <h2 className='popup-header-title'>{title}</h2>
                <svg
                    height='12'
                    viewBox='0 0 311 311.07733'
                    width='12'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={exit}
                >
                    <path d='m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0' />
                    <path d='m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0' />
                </svg>
            </div>
            <p className='popup-description'>{description}</p>
            <div className='popup-link'>
                <a href='#'>Ver comparación</a>
            </div>
        </div>
    )
}

export default Popup
