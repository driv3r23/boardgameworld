export default ( content, state ) =>
    `<!DOCTYPE html>
        <head>
            <link rel="stylesheet" href="styles.css"/>
        </head>
        <body>
            <main id="root">${ content }</main>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
            </script>
            <script src="client.js"></script>
        </body>
    </html>`