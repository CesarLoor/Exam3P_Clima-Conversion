// Calcula el promedio móvil de una serie de números
function movingAverage(series, tamanoVentana) {
    // Verificar que la serie sea un arreglo de números
    if (!Array.isArray(series) || series.some(isNaN)) {
        throw new TypeError('La serie debe ser un arreglo de números');
    }
    
    // Verificar que el tamaño de la ventana sea válido
    if (!Number.isInteger(tamanoVentana) || tamanoVentana < 2 || tamanoVentana > series.length) {
        throw new RangeError('El tamaño de la ventana debe ser un número entero entre 2 y la longitud de la serie');
    }

    const promedios = [];
    
    // Calcular promedios móviles
    for (let i = 0; i <= series.length - tamanoVentana; i++) {
        let suma = 0;
        
        // Sumar los números en la ventana actual
        for (let j = 0; j < tamanoVentana; j++) {
            suma += series[i + j];
        }
        
        // Calcular promedio y redondear a 2 decimales
        const promedio = suma / tamanoVentana;
        promedios.push(Math.round(promedio * 100) / 100);
    }
    
    return promedios;
}

module.exports = movingAverage;
