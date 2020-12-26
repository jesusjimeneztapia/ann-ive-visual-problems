import './App.scss'
import { Provider } from 'react-redux'
import store from './store'
import Home from './views/home'

const App = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}

export default App
