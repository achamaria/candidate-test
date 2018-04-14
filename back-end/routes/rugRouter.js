const express = require('express'); // importing express
const bodyParser = require('body-parser'); // importing body-parser middleware

const rugRouter = express.Router(); // initializing rugRouter

rugRouter.use(bodyParser.json()); // using body-parser middleware in rugRouter

// defining the route "/"
rugRouter.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res,next) => {
        res.end('Will send all the rugs to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the rug: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /rugs');
    })
    .delete((req, res, next) => {
        res.end('Deleting all rugs');
    });

module.exports = rugRouter;
