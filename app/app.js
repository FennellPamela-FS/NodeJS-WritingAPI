const express = require('express');
const randomDataRouter = require('../router/randomDataRouter');

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).json({ message: "Service is up" });
});

app.use("/testimonials", randomDataRouter);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method
        },
    });
});

module.exports = app; 
