export default ( content, state ) =>
    `<!DOCTYPE html> 
        <body>
            <main id="root">${ content }</main>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
            </script>
            <script src="client.js"></script>
        </body>
    </html>`