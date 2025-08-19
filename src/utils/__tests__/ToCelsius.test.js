const toCelsius = require('../ToCelsius');

describe('Pruebas para toCelsius', () => {
    test('32°F debe ser 0°C', () => {
        expect(toCelsius(32)).toBe(0);
    });

    test('212°F debe ser 100°C', () => {
        expect(toCelsius(212)).toBe(100);
    });

    test('-40°F debe ser -40°C', () => {
        expect(toCelsius(-40)).toBe(-40);
    });

    test('Debe lanzar error si no es un número', () => {
        expect(() => toCelsius('no es un número')).toThrow(TypeError);
    });
});
