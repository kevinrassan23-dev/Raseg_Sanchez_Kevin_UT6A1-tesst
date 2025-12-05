import isapple from '../helper/isapple';

describe('isapple', () => {

    // comprobamos que la función devuelva un resultado de tipo booleano true o false
    it('debe devolver un boolean', () => {
        const result = isapple('manzana');
        expect(typeof result).toBe('boolean');
    });

    // comprobamos que si entra la string "manzana" devuelve true
    it('debe devolver true si la fruta es manzana', () => {
        expect(isapple('manzana')).toBe(true);
    });

    // comprobar que si todo lo que entra como string no sea manzana devuelve false
    it('debe devolver false si la fruta no es manzana', () => {
        expect(isapple('pera')).toBe(false);
        expect(isapple('platano')).toBe(false);
        expect(isapple('')).toBe(false);
    });

});