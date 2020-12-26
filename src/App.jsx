import './App.scss'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import store from './store'
import HomeView from './views/home'
import EyesView from './views/eyes'
import NotFoundView from './views/not-found'
import { HOME, EYES, NOT_FOUND } from './constants/routeNames'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path={HOME} component={HomeView} exact />
                    <Route path={EYES} component={EyesView} exact />
                    <Route path={NOT_FOUND} component={NotFoundView} exact />
                    <Redirect from='*' to={NOT_FOUND} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
