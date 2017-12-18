import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Layout from '../../containers/Layout/Layout';
import App from '../../containers/App/App';

export default (req, context) => 
    Layout(
        ReactDOMServer.renderToString(
            <StaticRouter location={ req.url } context={ context }>
                <App/>
            </StaticRouter>
        )
    )