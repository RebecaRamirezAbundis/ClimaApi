const axios = require('axios');

const PAIS = 'MX';

function obtenerPais() {

    return axios.get(
        'https://countriesnow.space/api/v0.1/countries/capital'
    )
    .then((result) => {

        const pais = result.data.data.find((elemento) => {
            return elemento.iso2 === PAIS;
        });

        if (!pais || !pais.capital) {
            throw new Error('No se encontró el país o su capital');
        }

        return {
            nombre: pais.name,
            capital: pais.capital
        };

    });

}

module.exports = {
    obtenerPais
};

module.exports = {
    obtenerPais
};