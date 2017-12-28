import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import App from './containers/App/App'

const state = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = configureStore(state);

const render = ( App ) => {
    ReactDOM.hydrate(
        <AppContainer>
            <Provider store={ store }>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./containers/App/App', () => { 
        render(App) 
    })
}