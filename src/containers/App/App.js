import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import routes from '../../routes'

const App = () => (
    <Switch>
        {
            routes.map((route, key) => (
                <Route key={key} path={route.path} render={props => (
                    <route.component {...props} routes={route.routes}/>
                )}/>
            ))
        }
    </Switch>
)

export default App