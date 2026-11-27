function mostrarClima(clima) {

    console.log('======================');
    console.log('     CLIMA ACTUAL');
    console.log('======================');

    console.log('Ciudad:', clima.location.name);
    console.log('Temperatura:', clima.current.temperature, '°C');
    console.log('Sensación térmica:', clima.current.feelslike, '°C');
    console.log('Humedad:', clima.current.humidity, '%');
    console.log('Viento:', clima.current.wind_speed, 'km/h');
    console.log('Descripción:', clima.current.weather_descriptions[0]);

}

module.exports = {
    mostrarClima
};