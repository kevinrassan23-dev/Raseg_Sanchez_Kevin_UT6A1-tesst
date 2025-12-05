import sum from '../helper/sum'

    describe('sum', () => {
        // Comprobamos si la soma de 2 números devuelve un número
        it('debe retornar un número si los sumandos son números', () =>
        {  
            const result = sum(2,3);
            expect(typeof result).toBe('number')
        })

        // Comprobamos que retorne null si se suma un valor que es un número y otro que 
        // no es un número
        it('debe retornar null si algún sumando no es un número', () =>
        {   
            const result = sum('hola',3);
            expect(result).toBe(null)
        })

        // Comrpobamos que se realiza la suma correctamente
        it('debe retornar la suma', () => 
        {
            const result = sum(-2,5);
            expect(result).toBe(3);
        })
    
    });