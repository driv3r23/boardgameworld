import React from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import routes from '../../routes'

import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'

const App = ({ app }) => (
    <Content>
        <Header { ...app }/>
        <Switch>
            {
                routes.map((route, key) => (
                    <Route key={key} path={route.path} exact={route.exact} render={props => (
                        <route.component {...props} routes={route.routes}/>
                    )}/>
                ))
            }
        </Switch>
    </Content>
)

const mapStateToProps = state => {
    return {
        app: state.app
    }
}

export default withRouter(connect(mapStateToProps)(App))