// Convierte grados Fahrenheit a Celsius
function toCelsius(f) {
    // Verificar que el valor sea un número
    if (typeof f !== 'number' || isNaN(f)) {
        throw new TypeError('El valor debe ser un número');
    }
    
    // Aplicar la fórmula de conversión
    const celsius = (f - 32) * (5 / 9);
    
    // Redondear a 1 decimal
    return Math.round(celsius * 10) / 10;
}

module.exports = toCelsius;
