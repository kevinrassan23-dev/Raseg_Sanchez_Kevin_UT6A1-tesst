import divide from '../helper/divide';

describe('divide', () => {

    // comprobamos que el tipo que se devuelve es un número
    it('debe devolver un número cuando la operación es válida', () => {
        const result = divide(10, 2);
        expect(typeof result).toBe('number');
    });

    // comprobamos que si entra una string se devuelve null
    it('debe devolver null si algún parámetro es una string', () => {
        expect(divide('10', 2)).toBeNull();
        expect(divide(10, '2')).toBeNull();
        expect(divide('a', 'b')).toBeNull();
    });

    // comprobamos que realiza la división de 10 entre 2 y devuelva 5
    it('debe dividir 10 entre 2 correctamente', () => {
        expect(divide(10, 2)).toBe(5);
    });

    // comprobamos que realiza la división de 10 entre 4 y devuelva 2.5
    it('debe dividir 10 entre 4 correctamente', () => {
        expect(divide(10, 4)).toBe(2.5);
    });

    // comprobamos que la división de cualquier número entre 0 devuelva null
    it('debe devolver null al dividir entre 0', () => {
        expect(divide(5, 0)).toBeNull();
        expect(divide(100, 0)).toBeNull();
    });

});