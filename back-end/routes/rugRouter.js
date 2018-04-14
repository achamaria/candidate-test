const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Rugs = require('../models/ruges');

const rugRouter = express.Router();

rugRouter.use(bodyParser.json());

rugRouter.route('/')
    .get((req,res,next) => {
        Rugs.find({})
            .then((ruges) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(ruges);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Rugs.create(req.body)
            .then((rug) => {
                console.log('Rug Created ', rug);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rug);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /ruges');
    })
    .delete((req, res, next) => {
        Rugs.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

rugRouter.route('/:rugId')
    .get((req,res,next) => {
        Rugs.findById(req.params.rugId)
            .then((rug) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rug);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /ruges/'+ req.params.rugId);
    })
    .put((req, res, next) => {
        Rugs.findByIdAndUpdate(req.params.rugId, {
            $set: req.body
        }, { new: true })
            .then((rug) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rug);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Rugs.findByIdAndRemove(req.params.rugId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = rugRouter;
