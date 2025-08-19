const movingAverage = require('../movingAverage');

describe('Pruebas para movingAverage', () => {
    test('Promedio móvil de [10, 20, 30, 40] con ventana 2', () => {
        expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15, 25, 35]);
    });

    test('Promedio móvil de [1, 2, 3] con ventana 3', () => {
        expect(movingAverage([1, 2, 3], 3)).toEqual([2]);
    });

    test('Debe lanzar error si la serie no es un arreglo de números', () => {
        expect(() => movingAverage([1, 2, 'no es número'], 2)).toThrow(TypeError);
    });

    test('Debe lanzar error si la ventana es menor a 2', () => {
        expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError);
    });

    test('Debe lanzar error si la ventana es mayor que la longitud de la serie', () => {
        expect(() => movingAverage([1, 2, 3], 4)).toThrow(RangeError);
    });
});
