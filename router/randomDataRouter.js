const express = require('express');
const { randomDataService, randomDataServiceById } = require('../services/randomDataService');
const randomDataRouter = express.Router();


randomDataRouter.get('/', (req, res, next) => {
    randomDataService()
        .then(result => {
            res.status(200).json(result.data);
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });
});

randomDataRouter.get('/:id', (req, res, next) => {
    randomDataServiceById(req.params.id)
        .then(result => {
            res.status(200).json({
                result: result.data
            });
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });
});

module.exports = randomDataRouter;