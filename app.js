const readline = require('readline');

const { obtenerPais } = require('./paisApi');
const { obtenerClima } = require('./climaApi');
const { mostrarClima } = require('./funciones');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Qué país quieres consultar? ', (respuesta) => {

    obtenerPais(respuesta)

        .then((pais) => {

            console.log('País:', pais.nombre);
            console.log('Capital:', pais.capital);

            return obtenerClima(pais.capital);

        })

        .then((clima) => {

            mostrarClima(clima);

        })

        .catch((error) => {

            console.log('Error:', error.message);

        })

        .finally(() => {

            rl.close();

        });

});
