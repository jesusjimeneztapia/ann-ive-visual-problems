import './App.scss'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import store from './store'
import HomeView from './views/home'
import EyesView from './views/eyes'
import NotFoundView from './views/not-found'
import LoadingView from './views/loading'
import { HOME, EYES, NOT_FOUND } from './constants/routeNames'
import { train } from './utils'
import { useEffect, useState } from 'react'

const App = () => {
    const [trained, setTrained] = useState(false)
    useEffect(() => {
        if (!trained) {
            //train(setTrained)
        }
    }, [trained])
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    {/*<Route
                        path={HOME}
                        component={() => {
                            if (trained) {
                                return <HomeView />
                            }
                            return <LoadingView />
                        }}
                        exact
                    />*/}
                    <Route path={HOME} component={LoadingView} exact />
                    <Route path={EYES} component={EyesView} exact />
                    <Route path={NOT_FOUND} component={NotFoundView} exact />
                    <Redirect from='*' to={NOT_FOUND} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
