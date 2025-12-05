import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormUsuario from '../components/FormUsuario';

describe('FormUsuario component', () => {

    // comprobamos que se renderiza el botón correctamente
    it('debe renderizar el botón', () => {
        render(<FormUsuario />);
        const boton = screen.getByRole('button', { name: /submit/i });
        expect(boton).toBeInTheDocument();
    });

    // comprobamos que se renderiza el campo de texto correctamente
    it('debe renderizar el campo de texto', () => {
        render(<FormUsuario />);
        const input = screen.getByRole('input');
        expect(input).toBeInTheDocument();
    });

    // comprobamos que se renderiza la cabecera de nivel 2 correctamente
    it('debe renderizar la cabecera h2', () => {
        render(<FormUsuario />);
        const header = screen.getByRole('heading', { level: 2 });
        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent('Rellena el formulario');
    });

    // comprobamos que al escribir un nombre o texto y pulsar el botón se borra el campo correctamente
    it('debe borrar el campo de texto cuando se envía el formulario', async () => {
        const user = userEvent.setup();
        render(<FormUsuario />);

        // Obtenemos la etiqueta de texto y el botón para borrar su contenido
        const input = screen.getByLabelText(/nombre/i);
        const boton = screen.getByRole('button', { name: /submit/i });

        // Limpiamos el campo por defecto aunque esté vacío
        await user.clear(input);

        // Escribimos un nombre y añadimos contenido a la etiqueta de texto
        await user.type(input, 'Juan');

        // Comprobamos que el valor a borrar con el botón sea el mismo que el que insertamos en la etiqueta
        expect(input).toHaveValue('Juan');

        // Hacemos click en el botón para que el botón haga su función 
        await user.click(boton);

        // Comprobamos que el campo se borra correctamente
        expect(input).toHaveValue('');
    });

});
