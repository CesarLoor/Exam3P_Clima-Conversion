// Convierte grados Celsius a Fahrenheit
function toFahrenheit(c) {
    // Verificar que el valor sea un número
    if (typeof c !== 'number' || isNaN(c)) {
        throw new TypeError('El valor debe ser un número');
    }
    
    // Aplicar la fórmula de conversión
    const fahrenheit = (c * 9/5) + 32;
    
    // Redondear a 1 decimal
    return Math.round(fahrenheit * 10) / 10;
}

module.exports = toFahrenheit;
