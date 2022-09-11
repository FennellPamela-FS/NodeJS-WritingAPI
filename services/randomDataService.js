const axios = require('axios');
require('dotenv').config();

const randomDataService = async () => {
    console.log('Generate random testimonial data');
    return await axios.get(`${process.env.randomDataUrl}`);
};

const randomDataServiceById = async (id) => {
    console.log('Generate random testimonial data by id');
    return await axios.get(`${process.env.randomDataUrl}/${id}`);
};

module.exports = {
    randomDataService,
    randomDataServiceById
};