
import titleCase from '../helper/titleCase'

describe('titleCase', () => {

        //Comprobamos si en la ejecuación de titleCase al pasarle cualquier
        //valor de string me devuelve una string
        it('debe retornar un string', () =>
        {  
                const result = titleCase('Un valor aleatorio');
                expect(typeof result).toBe('string')
        })
        
        // Comprobamos que titleCase nos devuelva una frase con la primera letra
        // convertida a mayúscula
        it('debe retornar el string transformado', () => 
        {
                const result = titleCase('es una string pequeña');
                expect(result).toBe('Es Una String Pequeña');

        })

        // Comprobamos que al insertarle un valor vacío a titleCase, 
        // devuelva un string vacío
        it('debe retornar un string vacío si recibe un valor vacío', () => {
                expect(titleCase('')).toBe('');
        });

});
