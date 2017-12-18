import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import App from './containers/App/App'

const render = (App) => {
    ReactDOM.hydrate(
        <AppContainer>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
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