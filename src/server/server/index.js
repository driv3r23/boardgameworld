import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Html from './containers/Html/Html'

import App from '../../containers/App/App'

import configureStore from '../../store/configureStore'

const store = configureStore()

export default (req, context) => 
    Html(
        ReactDOMServer.renderToString(
            <Provider store={ store }>
                <StaticRouter location={ req.url } context={ context }>
                    <App/>
                </StaticRouter>
            </Provider>
        ),
        store.getState()
    )