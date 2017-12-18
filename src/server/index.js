const path = require('path');
const express = require('express')

const app = express()
const server = require(path.join(__dirname, '../../dist/server.js')).default;

const port = process.env.PORT || 3000;

app.use(require('./' + process.env.NODE_ENV + '/index'));

app.use(express.static('dist'))

app.get('*', function (req, res, next) {
    const context = {}

    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        })
        res.end()
    } else {
        res.status(200).send(
            server(req, context)
        )
    }
})

app.use(function (req, res, next) {
    var err = new Error();
    err.status = 404;
    next(err);
})

app.use(function (err, req, res, next) {
    if(err.status !== 404) return next();

    res.status(err.status);
    res.send('[404] Not Found');
})

app.use(function(err, req, res, next) {
    res.status(500);
    res.send('[500] Internal Server Error');
})

app.listen(port, () => {
    console.log(`Node.js app is running at http://localhost:${port}/`);
});