const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('./cors');

const rugRouter = express.Router();

const Rugs = require('../models/rugs');

rugRouter.use(bodyParser.json());

rugRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors, (req, res, next) => {
        Rugs.find({})
            .then((rugs) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rugs)
            }, (err) => {next(err)})
            .catch((err) => {next(err)})
    })
    .post(cors.corsWithOptions, (req ,res, next) => {
        Rugs.create(req.body)
            .then((rug) => {
                console.log('Rug created ', rug);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rug)
            }, (err) => {next(err)})
            .catch((err) => {next(err)})
    })
    .put(cors.corsWithOptions, (req ,res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /rugs');
    })
    .delete(cors.corsWithOptions, (req, res, next) => {
        Rugs.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp)
            }, (err) => {next(err)})
            .catch((err) => {next(err)})
    });

rugRouter.route('/:rugId')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors, (req,res,next) => {
        Rugs.findById(req.params.rugId)
            .then((rug) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rug)
            }, (err) => {next(err)})
            .catch((err) => {next(err)})
    })
    .post(cors.corsWithOptions, (req ,res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /rugs/' + req.params.rugId);
    })
    .put(cors.corsWithOptions, (req ,res, next) => {
        Rugs.findByIdAndUpdate(req.params.rugId, {
            $set : req.body
        }, { new: true })
            .then((rug) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rug)
            }, (err) => {next(err)})
            .catch((err) => {next(err)})
    })
    .delete(cors.corsWithOptions, (req, res, next) => {
        Rugs.findByIdAndRemove(req.params.rugId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp)
            }, (err) => {next(err)})
            .catch((err) => {next(err)})
    });

module.exports = rugRouter;
