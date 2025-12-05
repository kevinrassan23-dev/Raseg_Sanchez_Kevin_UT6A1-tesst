import { render, screen, fireEvent } from '@testing-library/react';
import TextBox2 from '../components/TextBox2';

describe('TextBox2 component', () => {

    // comprobamos que se renderiza la caja correctamente
    it('debe renderizar la caja', () => {
        render(<TextBox2 />);
        const caja = screen.getByRole('caja');
        expect(caja).toBeInTheDocument();
    });

    // comprobamos que se renderiza el botón correctamente
    it('debe renderizar el botón', () => {
        render(<TextBox2 />);
        const boton = screen.getByRole('button', { name: /modificar el color del texto/i });
        expect(boton).toBeInTheDocument();
    });

    // interacción al picar el botón para cambiar el color de texto
    it('debe cambiar el color del texto al pulsar el botón', () => {
        render(<TextBox2 />);

        // Obtenemos el componente de la caja y el botón que cambia el color de texto
        const caja = screen.getByRole('caja');
        const boton = screen.getByRole('button', { name: /modificar el color del texto/i });

        // color inicial por defecto
        expect(caja).toHaveStyle('color: rgb(255,192,203)');

        // Usamos fireEvent para simular el click y cambiar el color del texto
        fireEvent.click(boton);

        // cambiamos el color resultante después del click
        expect(caja).toHaveStyle('color: rgb(0,0,0)');
    });

});