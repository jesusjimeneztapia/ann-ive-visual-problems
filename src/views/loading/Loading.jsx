import './Loading.scss'

const Loading = () => {
    return (
        <div className='loading'>
            <div className='loading-loader'>
                <div style={{ '--i': 0 }}></div>
                <div style={{ '--i': 1 }}></div>
                <div style={{ '--i': 2 }}></div>
                <div style={{ '--i': 3 }}></div>
                <div style={{ '--i': 4 }}></div>
            </div>
            <p className='h3'>Cargando...</p>
        </div>
    )
}

export default Loading
