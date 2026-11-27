require('dotenv').config();

const axios = require('axios');

const API_KEY = process.env.API_KEY;

function obtenerClima(capital) {

    return axios.get('https://api.weatherstack.com/current', {
        params: {
            access_key: 'a3a93af25086c1e8a3485ef322370440',
            query: capital
        }
    })
    .then((result) => {

        if (result.data.error) {
            throw new Error(JSON.stringify(result.data.error));
        }

        return result.data;

    })
    .catch((error) => {

        console.log('DETALLE DEL ERROR:');
        console.log(error.response?.data || error.message);

        throw error;
    });

}

module.exports = {
    obtenerClima
};