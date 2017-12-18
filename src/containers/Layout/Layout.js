export default ( content ) =>
    `<!DOCTYPE html> 
        <body>
            <div id="root">${ content }</div>
            <script src="client.js"></script>
        </body>
    </html>`