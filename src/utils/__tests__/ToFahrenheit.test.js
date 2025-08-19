const toFahrenheit = require('../ToFahrenheit');

describe('Pruebas para toFahrenheit', () => {
    test('0°C debe ser 32°F', () => {
        expect(toFahrenheit(0)).toBe(32);
    });

    test('100°C debe ser 212°F', () => {
        expect(toFahrenheit(100)).toBe(212);
    });

    test('-40°C debe ser -40°F', () => {
        expect(toFahrenheit(-40)).toBe(-40);
    });

    test('Debe lanzar error si no es un número', () => {
        expect(() => toFahrenheit('no es un número')).toThrow(TypeError);
    });
});

